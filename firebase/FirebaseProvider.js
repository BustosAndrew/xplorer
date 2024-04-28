import { createContext, useEffect, useState } from 'react'

import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

export const FirebaseContext = createContext({})

const firebaseConfig = {
	apiKey: 'AIzaSyCXk_4kq4T7qkn1rPdAmUcKhrVotbuK_1A',
	authDomain: 'xplorer-56c58.firebaseapp.com',
	projectId: 'xplorer-56c58',
	storageBucket: 'xplorer-56c58.appspot.com',
	messagingSenderId: '849771958024',
	appId: '1:849771958024:web:d2f9f5a75271ddceec26bd',
}

export const FirebaseProvider = (props) => {
	const children = props.children

	const [firebaseInitializing, setFirebaseInitializing] = useState(true)
	const [usingEmulators, setUsingEmulators] = useState(false)
	const [emulatorsConfig, setEmulatorsConfig] = useState(false)

	const myApp = initializeApp(firebaseConfig)
	const myAuth = getAuth(myApp)
	const myFS = getFirestore(myApp)
	const myStorage = getStorage(myApp)

	useEffect(() => {
		setFirebaseInitializing(false)
	}, [myAuth, myFS, myStorage])

	if (firebaseInitializing) {
		//return <h1>Loading</h1>;
	}

	const values = {
		usingEmulators,
		emulatorsConfig,
		myApp,
		myAuth,
		myFS,
		myStorage,
	}

	return (
		<FirebaseContext.Provider value={values}>
			{children}
		</FirebaseContext.Provider>
	)
}
