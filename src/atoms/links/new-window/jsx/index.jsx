const LinkNewWindow = ( { href, aria_label, children } ) => {

    return (

        <a href={ href } aria-label={ aria_label } target="_blank">
            { children }
        </a>

    )

}
export default LinkNewWindow
