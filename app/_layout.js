import { Auth } from '../comps/Auth'
import { AuthProvider } from '../firebase/AuthProvider'
import { FirebaseProvider } from '../firebase/FirebaseProvider'

export default function AppLayout() {
	return (
		<FirebaseProvider>
			<AuthProvider>
				<Auth />
			</AuthProvider>
		</FirebaseProvider>
	)
}
