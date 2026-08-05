import { Phone, Mail, MessageCircle } from 'lucide-react'
import { clinicInfo } from '@/lib/data/clinic'

export function TopContactBar() {
  return (
    <div className="bg-gray-900 text-white py-3 border-b border-gray-800">
      <div className="container-custom flex flex-col sm:flex-row items-center justify-center sm:justify-end gap-6 text-sm">
        {/* Phone Numbers */}
        <div className="flex items-center gap-2">
          <Phone size={16} className="text-blue-400" />
          <div className="flex gap-4">
            {clinicInfo.topContact.phones.map((phone, idx) => (
              <a
                key={idx}
                href={`tel:${phone.replace(/\s/g, '')}`}
                className="hover:text-blue-400 transition-colors font-medium"
              >
                {phone}
              </a>
            ))}
          </div>
        </div>

        {/* Email */}
        <div className="flex items-center gap-2">
          <Mail size={16} className="text-green-400" />
          <a
            href={`mailto:${clinicInfo.email}`}
            className="hover:text-green-400 transition-colors font-medium"
          >
            {clinicInfo.email}
          </a>
        </div>

        {/* WhatsApp */}
        <div className="flex items-center gap-2">
          <MessageCircle size={16} className="text-teal-400" />
          <a
            href={`https://wa.me/${clinicInfo.whatsapp.replace(/\s+/g, '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teal-400 transition-colors font-medium"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </div>
  )
}
