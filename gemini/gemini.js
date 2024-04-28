import { GoogleGenerativeAI } from '@google/generative-ai'
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY)
const model = genAI.getGenerativeModel({ model: 'gemini-1.5-pro-latest' })

export const locationMessage = async (location) => {
	const prompt = `You are given the following location: ${location}. Generate a short and clever description of this location in plaintext.`

	const result = await model.generateContent(prompt)
	const response = result.response
	const text = response.text()
	return text
}

export const locationAnimation = async (location) => {
	const prompt = `You are given the following location: ${location}. Return only one word in plaintext from the following list that best describes this location: "school", "restaurant", "store", "airport", "park", "amusement", "science", "forest".`

	const result = await model.generateContent(prompt)
	const response = result.response
	const text = response.text()
	return text
}
