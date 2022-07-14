import { useDispatch, useSelector } from "react-redux";
import { setDarkTheme, setDefaultTheme } from "../../store/themeSlice";

import { BsMoonStarsFill, BsFillSunFill } from "react-icons/bs";

import "./Toggle.scss";

const Toggle = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme);

  const setDark = () => {
    dispatch(setDarkTheme());
  };

  const setDefault = () => {
    dispatch(setDefaultTheme());
  };

  return (
    <>
      <div id='darkmode'>
        {!theme.darkmode ? (
          <input
            type='checkbox'
            className='checkbox'
            id='checkbox'
            onChange={setDark}
          />
        ) : (
          <input
            type='checkbox'
            className='checkbox'
            id='checkbox'
            onChange={setDefault}
          />
        )}

        <label htmlFor='checkbox' className='label'>
          <BsMoonStarsFill color='white' />
          <BsFillSunFill color='yellow' />
          <div className='ball'></div>
        </label>
      </div>
    </>
  );
};

export default Toggle;
