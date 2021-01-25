import { CMS_URL } from '../lib/constants'
import { FacebookProvider, Comments } from 'react-facebook'

export default function ArticleComments({ url }) {
    return(
        <div className="mt-20 pt-12 pb-10 bg-gray-100">
            <div className="px-5 lg:flex lg:justify-center lg:min-w-medium">
                <FacebookProvider appId={process.env.FACEBOOK_APP_ID} className="lg:min-w-medium" width="100%">
                    <Comments href={`${CMS_URL}/${url}`} />
                </FacebookProvider>
            </div>
        </div>
    )
}