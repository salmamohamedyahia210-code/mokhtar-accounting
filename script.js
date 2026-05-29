import { collection, addDoc } from "firebase/firestore";
import { db } from "./firebase.js";

async function sendMessage() {
  const name = document.getElementById("name").value;
  const message = document.getElementById("message").value;

  await addDoc(collection(db, "messages"), {
    name: name,
    message: message,
    time: new Date()
  });

  alert("تم إرسال الرسالة ✅");
}
