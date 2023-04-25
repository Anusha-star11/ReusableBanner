// Write your code here.
import './index.css'

const BannerCardItem = props => {
  const {cardDetails} = props
  const {headerText, description, className} = cardDetails
  return (
    <li className={`${className} banner-card-item`}>
      <h1 className="heading">{headerText}</h1>
      <p className="description">{description}</p>
      <button className="showmore-button" type="button">
        ShowMore
      </button>
    </li>
  )
}
export default BannerCardItem
