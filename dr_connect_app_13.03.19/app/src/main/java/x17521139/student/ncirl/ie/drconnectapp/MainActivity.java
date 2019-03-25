package x17521139.student.ncirl.ie.drconnectapp;

import android.content.Intent;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.ImageButton;
import android.widget.TextView;

public class MainActivity extends AppCompatActivity {
    private Button logIn;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        logIn = (Button)findViewById(R.id.logIn);
        logIn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                openLogIn();
            }
        });
    }
    public void openLogIn(){
        Intent intentLogIn = new Intent(this, HomePage.class);
        startActivity(intentLogIn);
    }
}
