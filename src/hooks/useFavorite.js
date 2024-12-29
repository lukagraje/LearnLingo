import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../redux/auth/authSelectors";
import { ref, onValue } from "firebase/database";
import { auth } from "../assets/FirebaseConfig/FirebaseConfig";

export const useFavoriteTeachers = (db) => {
  const [favorites, setFavorites] = useState([]);
  const user = useSelector(selectUser); // Pobierz dane użytkownika

  useEffect(() => {
    if (!user) return;
    auth.onAuthStateChanged((user) => {
        if (user) {            
        onValue(ref(db, `favorite/${auth.currentUser.uid}`), (snapshot) => {
          setFavorites([]);
          const data = snapshot.val();
          if (data !== null) {
            Object.values(data).map((model) =>
              setFavorites((prev) => [...prev, model])
            );
          }
        });
      }
    });
  }, [user, db]);

  return favorites;
};
