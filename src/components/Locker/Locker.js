import React from 'react';
import style from '../Locker/Locker.module.css';
import Button from '../Button/Button';
import unicryptLocker from '../Button/button.module.css';

const Locker = () => {
  return (
    <div className={style.locker}>
      <div>
        <div>
          <h2 className={style.h2}>
            95.4% of the total $VTLK tokens are locked for 6 months.
          </h2>
          <a href="https://www.unicrypt.network/amm/uni/pair/0x52412596EdBE01C4d16b2517CB8b72974e7F18e7">
            <Button
              type="submit"
              onClick
              className={unicryptLocker.unicryptLocker}
            >
              Check Unicrypt-locker
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Locker;
