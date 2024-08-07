// IMPORT REACT ICONS
import { FaLinkedin, FaFacebookF, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa"

// IMPORT JSX ATOMS
import LinkNewWindow from "@/atoms/links/new-window/jsx"

// LINKS
const links = [

    {
      icon: <FaLinkedin />,
      link: "/",
    },
    {
      icon: <FaFacebookF />,
      link: "/",
    },
    {
      icon: <FaInstagram />,
      link: "/",
    },
    {
      icon: <FaYoutube />,
      link: "/",
    },
    {
      icon: <FaTwitter />,
      link: "/",
    },

]

const SocialLinks = () => {

    return (

        <div className="flex gap-4">
            {

                links.map( ( social ) => (

                    <LinkNewWindow href={ social.link }>
                        <span className="text-gray-400 hover:text-gray-200 duration-300">{ social.icon }</span>
                    </LinkNewWindow>

                ))

            }
        </div>

    )

}
export default SocialLinks
