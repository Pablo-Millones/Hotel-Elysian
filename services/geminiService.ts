import { GoogleGenAI, Chat } from "@google/genai";

let chatSession: Chat | null = null;

const SYSTEM_INSTRUCTION = `
Eres Sebastián, el Conserje Virtual del Hotel Elysian.
Tu tono es sofisticado, cálido, profesional y servicial. Hablas en español.
El Hotel Elysian es un resort de lujo de 5 estrellas situado en un paraíso tropical.
Los servicios incluyen:
- "Suites Lujosas" con vistas al océano.
- "Alta Cocina" en nuestro restaurante con estrella Michelin 'The Azure'.
- "Spa Sereno" que ofrece tratamientos holísticos.
- Una piscina infinita y acceso privado a la playa.

Responde a las consultas de los huéspedes sobre reservas, amenidades y atracciones locales.
Mantén las respuestas concisas (menos de 100 palabras) a menos que se pidan detalles.
Si te preguntan por disponibilidad, pide cortésmente las fechas (simula verificar).
`;

export const initializeChat = (): void => {
  if (!process.env.API_KEY) {
    console.warn("API_KEY not found in environment variables.");
    return;
  }

  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    chatSession = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
    });
  } catch (error) {
    console.error("Failed to initialize Gemini chat:", error);
  }
};

export const sendMessageToConcierge = async (message: string): Promise<string> => {
  if (!chatSession) {
    initializeChat();
    if (!chatSession) {
        return "Lo siento, actualmente no estoy disponible. Por favor, contacte con la recepción.";
    }
  }

  try {
    const response = await chatSession.sendMessage({ message });
    return response.text || "Disculpe, no entendí bien eso.";
  } catch (error) {
    console.error("Error sending message to Gemini:", error);
    return "Estoy teniendo problemas para conectarme a la red del hotel. Por favor, inténtelo de nuevo en un momento.";
  }
};