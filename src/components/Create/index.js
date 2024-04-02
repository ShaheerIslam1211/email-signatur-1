import React, { useState, useEffect } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { Tabs, Button } from 'antd';
import {
  AppstoreOutlined,
  EditOutlined,
  PictureOutlined,
  UsergroupAddOutlined,
  ToolOutlined,
  FileDoneOutlined,
} from '@ant-design/icons';
import './create.css';
import DetailsTabContent from './DetailsTabContent';
import ImageTabContent from './ImageTabContent';
import SocialTabContent from './SocialTabContent';
import DesignTabContent from './DesignTabContent';
import Signature from './signature';
import Navbar from '../Navbar';

const firebaseConfig = {
  apiKey: 'AIzaSyAEWpYf5W_ia682y4-cIpFHJ6HWuVzpt_8',
  authDomain: 'email-signature-1a29b.firebaseapp.com',
  projectId: 'email-signature-1a29b',
  storageBucket: 'email-signature-1a29b.appspot.com',
  messagingSenderId: '222305702270',
  appId: '1:222305702270:web:24c3bb6391ed23c1cba32f',
  measurementId: 'G-V1H17SLQS9',
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const Create = () => {
  const [user, setUser] = useState(null);
  const [userData, setUserData] = useState({
    details: {},
    image: {},
    design: {},
    social: {},
  });

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
        loadUserData(user.uid);
      } else {
        setUser(null);
        setUserData({
          details: {},
          image: {},
          design: {},
          social: {},
        });
      }
    });

    return () => unsubscribe();
  }, []);

  const loadUserData = (userId) => {
    const db = firebase.firestore();
    const userRef = db.collection('users').doc(userId);

    userRef
      .get()
      .then((doc) => {
        if (doc.exists) {
          setUserData(doc.data());
        } else {
          console.log('No user data found');
        }
      })
      .catch((error) => {
        console.error('Error getting user data:', error);
      });
  };

  const saveUserData = () => {
    if (user) {
      const db = firebase.firestore();
      const userRef = db.collection('users').doc(user.uid);

      userRef
        .set(userData)
        .then(() => {
          console.log('User data saved successfully');
        })
        .catch((error) => {
          console.error('Error saving user data:', error);
        });
    }
  };

  const handleDetailsUpdate = (updatedDetails) => {
    setUserData((prevUserData) => ({
      ...prevUserData,
      details: updatedDetails,
    }));
  };

  const handleImageUpdate = (updatedImage) => {
    setUserData((prevUserData) => ({
      ...prevUserData,
      image: updatedImage,
    }));
  };

  const handleDesignUpdate = (updatedDesign) => {
    setUserData((prevUserData) => ({
      ...prevUserData,
      design: updatedDesign,
    }));
  };

  const handleSocialUpdate = (updatedSocial) => {
    setUserData((prevUserData) => ({
      ...prevUserData,
      social: updatedSocial,
    }));
  };

  const signInWithGoogle = async () => {
    try {
      const provider = new firebase.auth.GoogleAuthProvider();
      await firebase.auth().signInWithPopup(provider);
    } catch (error) {
      console.error('Google sign-in error:', error);
    }
  };

  return (
    <>
      <Navbar user={user} />

      <div>
        <Tabs
          defaultActiveKey='1'
          tabPosition='left'
          className='left_tabs'
        >
          <Tabs.TabPane
            tab={
              <span>
                <AppstoreOutlined style={{ marginRight: '9%' }} />
                Templates
              </span>
            }
            key='1'
          >
            <p>Content for the first tab</p>
          </Tabs.TabPane>

          <Tabs.TabPane
            tab={
              <span>
                <EditOutlined style={{ marginRight: '15%' }} />
                Details
              </span>
            }
            key='2'
          >
            <DetailsTabContent
              details={userData.details}
              onUpdate={handleDetailsUpdate}
            />
          </Tabs.TabPane>

          <Tabs.TabPane
            tab={
              <span>
                <PictureOutlined style={{ marginRight: '7%' }} />
                Upload Image
              </span>
            }
            key='3'
          >
            <ImageTabContent
              image={userData.image}
              onUpdate={handleImageUpdate}
            />
          </Tabs.TabPane>

          <Tabs.TabPane
            tab={
              <span>
                <UsergroupAddOutlined style={{ marginRight: '15%' }} />
                Socials
              </span>
            }
            key='4'
          >
            <SocialTabContent
              social={userData.social}
              onUpdate={handleSocialUpdate}
            />
          </Tabs.TabPane>

          <Tabs.TabPane
            tab={
              <span>
                <ToolOutlined style={{ marginRight: '15%' }} />
                Design
              </span>
            }
            key='5'
          >
            <DesignTabContent
              design={userData.design}
              onUpdate={handleDesignUpdate}
            />
          </Tabs.TabPane>
        </Tabs>
      </div>

      <Signature
        signatureData={userData}
        onUpdate={setUserData}
      />

      {!user ? (
        <button
          onClick={signInWithGoogle}
          style={{ display: 'none' }}
        >
          Sign In with Google
        </button>
      ) : (
        <>
          <Button
            className='save-signature-details-button'
            type='primary'
            shape='round'
            icon={<FileDoneOutlined style={{ marginTop: '28%' }} />}
            onClick={saveUserData}
            size={'middle'}
          >
            OK, I'm Done
          </Button>
        </>
      )}
    </>
  );
};

export default Create;
