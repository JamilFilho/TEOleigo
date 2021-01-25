import { CMS_NAME, CMS_URL } from '../lib/constants'
import { Facebook, Twitter, Whatsapp, Telegram} from 'styled-icons/boxicons-logos'

export default function ShareButtons({url, title}) {
    return(
        <div className="w-11/12 lg:max-w-2xl mx-auto grid grid-cols-3 mt-16 lg:mt-28 gap-2">
            <button className="button p-2 bg-gray-100 dark:bg-gray-700 rounded-lg pt-4 pb-4" data-sharer="facebook" data-title={`"${title} | ${CMS_NAME}"`} data-url={`${CMS_URL}/${url}`} data-hashtag="#teoleigo">
                <Facebook title="Compartilhar artigo no Facebook" className="fill-current dark:text-gray-400 text-gray-700" size="24" />
            </button>

            <button className="button p-2 bg-gray-100 dark:bg-gray-700 rounded-lg pt-4 pb-4" data-sharer="twitter" data-title={`"${title} | ${CMS_NAME}"`} data-url={`${CMS_URL}/${url}`} data-via="teoleigo">
                <Twitter title="Compartilhar artigo no Twitter" className="fill-current dark:text-gray-400 text-gray-700" size="24" />
            </button>

            <button className="button p-2 bg-gray-100 dark:bg-gray-700 rounded-lg pt-4 pb-4" data-sharer="whatsapp" data-title={`"${title} | ${CMS_NAME}"`} data-url={`${CMS_URL}/${url}`}>
                <Whatsapp title="Enviar artigo pelo WhatsApp" className="fill-current dark:text-gray-400 text-gray-700" size="24" />
            </button>
        </div>
    )
}