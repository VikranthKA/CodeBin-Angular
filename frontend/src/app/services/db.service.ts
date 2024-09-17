import { Injectable } from '@angular/core';
import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, getFirestore, setDoc } from "firebase/firestore"
import { AuthService } from './auth.service';
import { Snippet } from '../../models/snippet';
import { firebaseApp } from '../../firebase/firebaseConfig';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DbService {
  private db?: any

  constructor(private authService: AuthService,private router:Router) {
    this.db = getFirestore(firebaseApp)

  }

  async createCodeSnippet(snippet: Snippet) {
    try {
      const docRef = await addDoc(collection(this.db, "snippet"), {
        ...snippet,
        by: this.authService.getUid()
      })
      console.log("created success", docRef.id)
      this.router.navigate(["/"])

    } catch (error) {
      console.log(error, "error")
      alert("Error in creating the Snippet")

    }

  }

  async getAllSnippet() {
    let result: any[] = []
    const data = await getDocs(collection(this.db, "snippet"))
    console.log(data, "allSnippets")
    data.forEach((doc) => {
      result.push({ id: doc?.id, ...doc.data() })
    })
    return result
  }


  async getSnippetById(snippedId: string) {
    const docRef = doc(this.db, "snippet", snippedId)

    const docSnap = await getDoc(docRef)
    if (docSnap.exists()) {
      console.log("Doc data", docSnap.data())
      return docSnap.data()
    } else {
      console.log("No doc found")
      return {
        id: new Date(),
        title: "Not found",
        code: "Not found"
      }
    }

  }


  async deleteSnippetById(snippedId: string) {
    try {

      await deleteDoc(doc(this.db, "snippet", snippedId))

    } catch (error) {
      console.log(error, "error")
    }

  }


  async updateSnippetById(snippedId: string, snippet: any) {
    try {

      await setDoc(doc(this.db, "snippet", snippedId), snippet)
      console.log("updatedSuccessfully")
      this.router.navigate(["/"])

    } catch (error) {
      console.log(error,"error")
    }
  }
}


