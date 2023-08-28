import { Injectable } from '@angular/core';
import {
  Firestore,
  getFirestore,
  collection,
  doc,
  addDoc,
  getDocs,
  deleteDoc,
  updateDoc,
  DocumentData,
  CollectionReference,
  onSnapshot,
  QuerySnapshot,
} from '@angular/fire/firestore';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  db: Firestore;
  tasks: CollectionReference<DocumentData>;
  private updatedSnapshot = new Subject<QuerySnapshot<DocumentData>>();
  obsr_UpdatedSnapshot = this.updatedSnapshot.asObservable();

  constructor() {
    this.db = getFirestore();
    this.tasks = collection(this.db, 'tasks');
  }

  getTasks() {
    onSnapshot(this.tasks, (snapshot) => {
      this.updatedSnapshot.next(snapshot);
    });
  }

  deleteTask(taskId: string) {
    const taskRef = doc(this.db, 'tasks', taskId);
    deleteDoc(taskRef);
  }

  toggleTask(task: any) {
    // Update the type to match your task structure
    const taskRef = doc(this.db, 'tasks', task.id);
    updateDoc(taskRef, { reminder: !task.reminder });
  }

  addTask(task: any) {
    // Update the type to match your task structure
    addDoc(this.tasks, task);
  }
}
