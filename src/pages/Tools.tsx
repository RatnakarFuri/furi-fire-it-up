
import React, { useState } from "react";
import { MessageSquare, QrCode, Mail, Copy, Check } from "lucide-react";

const Tools: React.FC = () => {
  // WhatsApp Link Generator
  const [whatsappNumber, setWhatsappNumber] = useState("");
  const [whatsappMessage, setWhatsappMessage] = useState("");
  const [whatsappLink, setWhatsappLink] = useState("");
  
  // QR Code Generator
  const [reviewUrl, setReviewUrl] = useState("");
  const [qrCodeUrl, setQrCodeUrl] = useState("");
  
  // Email Signature Generator
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [signature, setSignature] = useState("");
  
  // Copied state
  const [copied, setCopied] = useState(false);

  const generateWhatsappLink = () => {
    const cleanNumber = whatsappNumber.replace(/[^0-9]/g, "");
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const link = `https://wa.me/${cleanNumber}?text=${encodedMessage}`;
    setWhatsappLink(link);
  };

  const generateQRCode = () => {
    if (reviewUrl) {
      const encodedUrl = encodeURIComponent(reviewUrl);
      const newQRUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodedUrl}`;
      setQrCodeUrl(newQRUrl);
    }
  };

  const generateEmailSignature = () => {
    const newSignature = `
      <div style="font-family: Arial, sans-serif; font-size: 14px; color: #333333; line-height: 1.6;">
        <strong style="font-size: 16px; color: #222222;">${name}</strong><br>
        <span style="color: #c00404;">${title}</span><br>
        <span>FURI Digital Marketing Agency</span><br>
        <a href="mailto:${email}" style="color: #333333; text-decoration: none;">${email}</a><br>
        <span>${phone}</span><br>
        <div style="margin-top: 10px;">
          <a href="https://furiglobal.in" style="color: #c00404; text-decoration: none;">furiglobal.in</a>
        </div>
      </div>
    `;
    setSignature(newSignature);
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="pt-24 min-h-screen">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Marketing Tools</h1>
            <p className="text-xl">
              Free utilities to enhance your marketing and customer engagement efforts.
            </p>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* WhatsApp Link Generator */}
            <div className="card-neumorphic p-8">
              <div className="text-furi-red mb-6 flex justify-center">
                <MessageSquare size={48} />
              </div>
              <h2 className="text-2xl font-bold mb-6 text-center">WhatsApp Chat Link Generator</h2>
              <div className="space-y-4">
                <div>
                  <label htmlFor="whatsapp-number" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number (with country code)
                  </label>
                  <input
                    id="whatsapp-number"
                    type="text"
                    value={whatsappNumber}
                    onChange={(e) => setWhatsappNumber(e.target.value)}
                    placeholder="e.g. 919876543210"
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-furi-red focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label htmlFor="whatsapp-message" className="block text-sm font-medium text-gray-700 mb-1">
                    Pre-filled Message (optional)
                  </label>
                  <textarea
                    id="whatsapp-message"
                    value={whatsappMessage}
                    onChange={(e) => setWhatsappMessage(e.target.value)}
                    placeholder="Hello! I'd like to inquire about..."
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-furi-red focus:border-transparent"
                    rows={3}
                  />
                </div>
                
                <button
                  onClick={generateWhatsappLink}
                  className="w-full bg-furi-red text-white py-3 rounded-md hover:bg-opacity-90 transition-all"
                >
                  Generate Link
                </button>
                
                {whatsappLink && (
                  <div className="mt-6">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Your WhatsApp Link
                    </label>
                    <div className="flex">
                      <input
                        type="text"
                        value={whatsappLink}
                        readOnly
                        className="w-full p-3 border border-gray-300 rounded-l-md focus:outline-none"
                      />
                      <button
                        onClick={() => copyToClipboard(whatsappLink)}
                        className="bg-gray-200 px-4 rounded-r-md hover:bg-gray-300 transition-colors flex items-center justify-center"
                      >
                        {copied ? <Check size={20} className="text-green-600" /> : <Copy size={20} />}
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Google Reviews QR Generator */}
            <div className="card-neumorphic p-8">
              <div className="text-furi-red mb-6 flex justify-center">
                <QrCode size={48} />
              </div>
              <h2 className="text-2xl font-bold mb-6 text-center">Google Reviews QR Generator</h2>
              <div className="space-y-4">
                <div>
                  <label htmlFor="review-url" className="block text-sm font-medium text-gray-700 mb-1">
                    Google Review URL
                  </label>
                  <input
                    id="review-url"
                    type="text"
                    value={reviewUrl}
                    onChange={(e) => setReviewUrl(e.target.value)}
                    placeholder="https://g.page/r/..."
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-furi-red focus:border-transparent"
                  />
                </div>
                
                <button
                  onClick={generateQRCode}
                  className="w-full bg-furi-red text-white py-3 rounded-md hover:bg-opacity-90 transition-all"
                >
                  Generate QR Code
                </button>
                
                {qrCodeUrl && (
                  <div className="mt-6 flex flex-col items-center">
                    <img src={qrCodeUrl} alt="QR Code" className="max-w-full h-auto border p-2" />
                    <button
                      onClick={() => {
                        const link = document.createElement('a');
                        link.href = qrCodeUrl;
                        link.download = 'google-review-qr.png';
                        document.body.appendChild(link);
                        link.click();
                        document.body.removeChild(link);
                      }}
                      className="mt-4 bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300 transition-colors"
                    >
                      Download QR Code
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Email Signature Generator */}
            <div className="card-neumorphic p-8">
              <div className="text-furi-red mb-6 flex justify-center">
                <Mail size={48} />
              </div>
              <h2 className="text-2xl font-bold mb-6 text-center">Email Signature Generator</h2>
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-furi-red focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                    Job Title
                  </label>
                  <input
                    id="title"
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-furi-red focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-furi-red focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-furi-red focus:border-transparent"
                  />
                </div>
                
                <button
                  onClick={generateEmailSignature}
                  className="w-full bg-furi-red text-white py-3 rounded-md hover:bg-opacity-90 transition-all"
                >
                  Generate Signature
                </button>
                
                {signature && (
                  <div className="mt-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Your Email Signature
                    </label>
                    <div className="border p-4 rounded-md mb-4" dangerouslySetInnerHTML={{ __html: signature }} />
                    <button
                      onClick={() => copyToClipboard(signature)}
                      className="w-full flex items-center justify-center bg-gray-200 text-gray-800 py-2 rounded-md hover:bg-gray-300 transition-colors"
                    >
                      {copied ? (
                        <>
                          <Check size={18} className="mr-2 text-green-600" />
                          <span>Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy size={18} className="mr-2" />
                          <span>Copy HTML</span>
                        </>
                      )}
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Use Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">How to Use These Tools</h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-3">WhatsApp Chat Link</h3>
                <p className="text-gray-600">
                  Generate a direct link that opens WhatsApp with your pre-filled message. Use it in social media profiles, 
                  email signatures, or your website to make it easier for customers to contact you.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3">Google Reviews QR Code</h3>
                <p className="text-gray-600">
                  Create a QR code that directs customers to leave you a Google review. Print it on receipts, 
                  display it at your business location, or include it in thank-you emails to increase your review count.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3">Email Signature</h3>
                <p className="text-gray-600">
                  Generate a professional HTML email signature that includes your contact information and company branding. 
                  Copy the generated HTML and paste it into your email client's signature settings.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Need more advanced marketing tools?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Contact us to learn about our custom marketing technology solutions for your business.
            </p>
            <a href="/contact" className="btn-primary">
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Tools;
