import { useEffect, useState } from "react";
import { collection, doc, DocumentData, getDoc, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";

export function useFetch<T = DocumentData>(collectionName: string, documentId?: string) {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (documentId) {
                    const docRef = doc(db, collectionName, documentId);
                    const docSnap = await getDoc(docRef);
                    console.log("1");
                    if (docSnap.exists()) {
                        setData({
                            id: docSnap.id,
                            ...docSnap.data(),
                        } as T);
                    } else {
                        setData(null);
                    }
                } else {
                    console.log("2");
                    const collectionRef = collection(db, collectionName);
                    const querySnapshot = await getDocs(collectionRef);
                    const documents = querySnapshot.docs.map((doc) => ({
                        id: doc.id,
                        ...doc.data(),
                    }));
                    setData(documents as T);
                }

            } catch (error) {
                setError(error instanceof Error ? error : new Error("error en firebase"));
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, [collectionName, documentId])
    return { data, loading, error };
}