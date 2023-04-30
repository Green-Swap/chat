db.auth("root", "rootpassword");

db = db.getSiblingDB("chat");

db.createCollection("messages");
