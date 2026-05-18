import Runtime "mo:core/Runtime";
import Text "mo:core/Text";
import Map "mo:core/Map";
import Iter "mo:core/Iter";
import Time "mo:core/Time";
import Order "mo:core/Order";
import Array "mo:core/Array";
import Principal "mo:core/Principal";
import Int "mo:core/Int";

import AccessControl "authorization/access-control";
import MixinAuthorization "authorization/MixinAuthorization";

actor {
  module UserProfile {
    public func compare(profile1 : UserProfile, profile2 : UserProfile) : Order.Order {
      Text.compare(profile1.profileName, profile2.profileName);
    };
  };

  type ProfileType = {
    #Industry;
    #Institution;
  };

  type ContactMessage = {
    name : Text;
    email : Text;
    message : Text;
    submittedAt : Time.Time;
  };

  module ContactMessage {
    public func compare(message1 : ContactMessage, message2 : ContactMessage) : Order.Order {
      Int.compare(message2.submittedAt, message1.submittedAt);
    };
  };

  public type UserProfile = {
    profileName : Text;
    profileType : ProfileType;
    description : Text;
  };

  // Initialize access control state and include authentication system
  let accessControlState = AccessControl.initState();
  include MixinAuthorization(accessControlState);

  let profiles = Map.empty<Principal, UserProfile>();
  let contactMessages = Map.empty<Nat, ContactMessage>();

  var nextMessageId = 0;

  public shared ({ caller }) func saveCallerUserProfile(profile : UserProfile) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Registered users only");
    };
    profiles.add(caller, profile);
  };

  public query ({ caller }) func getCallerUserProfile() : async ?UserProfile {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Registered users only");
    };
    profiles.get(caller);
  };

  public query ({ caller }) func getUserProfile(user : Principal) : async ?UserProfile {
    if (caller != user and not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Can only view your own profile");
    };
    profiles.get(user);
  };

  public query ({ caller }) func getAllIndustries() : async [UserProfile] {
    profiles.filter(func(_, up) { up.profileType == #Industry }).values().toArray().sort();
  };

  public query ({ caller }) func getAllInstitutions() : async [UserProfile] {
    profiles.filter(func(_, up) { up.profileType == #Institution }).values().toArray().sort();
  };

  public shared ({ caller }) func submitContactMessage(name : Text, email : Text, message : Text) : async () {
    let newMessage : ContactMessage = {
      name;
      email;
      message;
      submittedAt = Time.now();
    };
    contactMessages.add(nextMessageId, newMessage);
    nextMessageId += 1;
  };

  public query ({ caller }) func getContactMessages() : async [ContactMessage] {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Admin account required");
    };
    contactMessages.values().toArray().sort();
  };

  public query ({ caller }) func getContactMessagesByEmail(email : Text) : async [ContactMessage] {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Admin account required");
    };
    contactMessages.filter(func(_, cm) { cm.email == email }).values().toArray().sort();
  };
};
