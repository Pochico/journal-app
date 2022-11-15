export const GifCard = ({ image, title }) => {
    return (
        <li className="gif-card">
            <img src={image} alt={title} />
            <h4 className="gif-title">{title}</h4>
        </li>
    )
}