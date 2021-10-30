import './index.css'

const EachSearchItem = props => {
  const {eachObje, deleteClickedOne} = props
  const {timeAccessed, id, logoUrl, title, domainUrl} = eachObje

  const itemDeleted = () => {
    console.log(id)
    deleteClickedOne(id)
  }

  return (
    <li className="eachListItem">
      <div className="logoContent">
        <p className="time">{timeAccessed}</p>
        <div className="logoWesiteTitle">
          <img src={logoUrl} alt="domain logo" className="logo" />
          <p className="title">{title}</p>
          <p className="domineUrl">{domainUrl}</p>
        </div>
      </div>
      <button
        type="button"
        onClick={itemDeleted}
        testid="delete"
        className="deleteBtn"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
          className="deleteIcon"
        />
      </button>
    </li>
  )
}

export default EachSearchItem
