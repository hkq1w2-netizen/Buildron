export const WHATSAPP_NUMBER = "923286207176";

export function waLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const DEFAULT_MESSAGE = "Hi Buildron, I want to discuss a project.";
