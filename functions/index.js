const functions = require("firebase-functions");
const admin = require("firebase-admin");
const sgMail = require("@sendgrid/mail");
require("dotenv").config();

admin.initializeApp();

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

exports.onFileUpload = functions.storage.object().onFinalize((object) => {
  const fileBucket = object.bucket;
  const filePath = object.name;
  const contentType = object.contentType;
  const resourceState = object.resourceState;

  if (resourceState === "not_exists") {
    console.log("This is a deletion event.");
    return null;
  }

  console.log(`File uploaded: ${filePath}`);

  const msg = {
    to: "callum.hall123@hotmail.com",
    from: "callumhall65@gmail.com",
    subject: "New File Uploaded to Firebase Storage",
    text: `A new file was uploaded to Firebase Storage: ${filePath}`,
  };

  return sgMail
    .send(msg)
    .then(() => {
      console.log(`Email sent to recipient`);
      return null;
    })
    .catch((error) => {
      console.error(error);
      return null;
    });
});
