import PropTypes from 'prop-types';

import { useLocation, useNavigate } from 'react-router';

const SingleView = (props) => {
  const {item, setSelectedItem} = props;

  if (!item) {
    return null;
  }

  return (

    <dialog open={item !== null}>
      <h2>{item.title}</h2>

      <p>{item.description}</p>
      <p><strong>Owner:</strong> {item.username}</p>

      {item.media_type.startsWith('image') ? (
        <img src={item.filename} alt={item.title} />
      ) : (
        <video controls>
          <source src={item.filename} type={item.media_type} />
        </video>
      )}

      <button onClick={() => setSelectedItem(null)}>
        Close
      </button>
    </dialog>
  );
};

SingleView.propTypes = {
  item: PropTypes.object,
  setSelectedItem: PropTypes.func.isRequired,
};

export default SingleView;

