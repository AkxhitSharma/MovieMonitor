**Database Tables Design**:

**Drive Link to Database table system** > https://drive.google.com/file/d/1DboyRFKadjrcH6cT4P17rzFEaARbJ84t/view?usp=drivesdk 

Table currencies {
  currency_id integer [primary key]
  currency_code varchar (e.g., USD, EUR, GBP)
  currency_name varchar (e.g., United States Dollar, Euro, British Pound)
  symbol symbol (e.g., $, €, £)
}

Table users {
  user_id integer [primary key]
  username varchar
  email varchar
  password_hash varchar
  created_at timestamp
}

Table userAlerts {
  alert_id integer [primary key]
  currency_id integer [Foreign Key to Currencies Table]
  desired_exchange_rate integer
  user_id integer [Foreign Key to Users Table]
  triggered Boolean [default: False]
  last_triggered_at timestamp
}

Ref: userAlerts.currency_id < currencies.currency_id 

Ref: userAlerts.user_id > users.user_id


**API Contracts**:

1. User Registration:
    Route: POST /api/register
    Request Payload: { username, email, password }
    Response: { user_id, username, email, registration_date }

2. User Login:
    Route: POST /api/login
    Request Payload: { email, password }
    Response: { user_id, username, token }

3. Fetch Available Currencies:
    Route: GET /api/currencies
    Response: [{ currency_id, currency_code, currency_name, symbol }]

4. Create Currency Alert:
    Route: POST /api/user_alerts
    Request Payload: { user_id, currency_id, desired_exchange_rate }
    Response: { alert_id, user_id, currency_id, desired_exchange_rate, triggered, last_triggered_at }

5. Get User Alerts:
    Route: GET /api/user_alerts/:user_id
    Response: [{ alert_id, currency_id, desired_exchange_rate, triggered, last_triggered_at }]

6. Update Currency Alert:
    Route: PUT /api/user_alerts/:alert_id
    Request Payload: { desired_exchange_rate }
    Response: { alert_id, user_id, currency_id, desired_exchange_rate, triggered, last_triggered_at }

7. Delete Currency Alert:
    Route: DELETE /api/user_alerts/:alert_id
    Response: { message: "Alert deleted successfully" }


**Documentation Quality**:

1. Introduction: Briefly introduce the application's purpose and features.

2. Authentication: Explain the authentication process, including tokenbased authentication and security measures implemented.

3. Setup and Installation: Stepbystep instructions for setting up and deploying the application.

4. Usage Instructions: Detailed guidelines on how users can register, log in, create alerts, and manage their preferences.

5. Assumptions: Clearly document any assumptions made during the design process, such as API availability, currency data source, and user requirements.

6. Error Handling: Describe how errors and exceptions are handled in the API, along with error codes and messages.

7. Best Practices: Include any coding conventions, security practices, and design patterns followed.

8. Contact Information: Provide contact details for support and feedback.


**Assumptions Considered for the Design**:

1. Currency Exchange API: Assumed that a reliable currency exchange rate API that provides uptodate exchange rate data is available.

2. Currency Codes and Symbols: The currency API provides standard currency codes and symbols.

3. Currency Updates: The currency exchange rates may fluctuate frequently, and users will be provided with the most uptodate information based on API availability.

4. User Preferences: Users can track multiple currency pairs and set their desired exchange rates for each pair.

5. Notification System: Assumed that a notification system that can send alerts to users when their desired exchange rates are met already exists.

6. Data Privacy: The application will handle user data with appropriate security measures to ensure data privacy.

7. RealTime Rates: Assumed realtime or nearrealtime access to exchange rate data to provide timely notifications.

8. UI/UX Design: The design and implementation of the user interface are outside the scope of this document.
