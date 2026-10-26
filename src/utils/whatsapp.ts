import { BUSINESS } from "../data/business";

export const getWhatsAppInquiryUrl = (serviceName: string, actionType: string = "inquire") => {
  const cleanService = serviceName.trim();
  let message = "";

  if (actionType.toLowerCase().includes("consult")) {
    message = `Hi 3M Car Care OMR, I would like to book a consultation for ${cleanService}. Please share available slots.`;
  } else {
    message = `Hi 3M Car Care OMR, can I get more info and pricing for ${cleanService}?`;
  }

  return `https://wa.me/${BUSINESS.whatsappClean}?text=${encodeURIComponent(message)}`;
};
