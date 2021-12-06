import {
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonMenuButton,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import React from 'react';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <p>Das ist ein Live Update</p>
        <p>
          This app was created to test and develop Capacitor core and plugins.
          To test plugins, open the side menu and navigate to the plugin's page!
        </p>
      </IonContent>
    </IonPage>
  );
};

export default Home;
