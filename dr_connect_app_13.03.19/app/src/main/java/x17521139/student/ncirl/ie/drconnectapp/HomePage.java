package x17521139.student.ncirl.ie.drconnectapp;

import android.content.Intent;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.view.View;
import android.widget.ImageButton;

public class HomePage extends AppCompatActivity {
    private ImageButton pres,doctor,appt,notif,nfc;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_home_page);

        pres = (ImageButton)findViewById(R.id.presBtn);
        pres.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                openPres();
            }
        });

        doctor = (ImageButton)findViewById(R.id.doctorBtn);
        doctor.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                openDoctor();
            }
        });

        appt = (ImageButton)findViewById(R.id.apptBtn);
        appt.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                openAppt();
            }
        });

        notif = (ImageButton)findViewById(R.id.notifBtn);
        notif.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                openNotif();
            }
        });

        nfc = (ImageButton)findViewById(R.id.nfcBtn);
        nfc.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                openNfc();
            }
        });
    }



    public void openPres(){
        Intent intentPres = new Intent(this, Prescriptions.class);
        startActivity(intentPres);
    }
    public void openDoctor(){
        Intent intentDoctor = new Intent(this, Doctor.class);
        startActivity(intentDoctor);
    }
    public void openAppt(){
        Intent intentAppt = new Intent(this, Appointments.class);
        startActivity(intentAppt);
    }
    public void openNotif(){
        Intent intentNotif = new Intent(this, Notifications.class);
        startActivity(intentNotif);
    }

    public void openNfc(){
        Intent intentNfc = new Intent(this, NfcConnect.class);
        startActivity(intentNfc);
    }
}
