import { AnimatePresence } from 'framer-motion';
import React, { FC } from 'react';
import { APP_NAME } from '../../../../static/vars.static';
import MainForm from '../../../designs/Forms/MainForm';
import MainModal from '../../../designs/Modals/MainModal';

export interface SignupType {
  showSignup: boolean;
  setShowSignup: any;
}

const Signup: FC<SignupType> = ({ showSignup, setShowSignup }) => {
  return (
    <AnimatePresence>
      {showSignup && (
        <MainModal
          header="Create My Profile / Sginup"
          subHeader={`Welcome to ${APP_NAME}! Sign up with`}
          setShowState={setShowSignup}
          Form={MainForm}
        />
      )}
    </AnimatePresence>
  );
};

export default Signup;
