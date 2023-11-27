### Conceptual Exercise

Answer the following questions below:

- What is a JWT?
JWT stands for JSON Web Token. It is a compact, URL-safe means of representing claims between two parties. JWTs are often used for authentication and information exchange in a secure manner between parties



- What is the signature portion of the JWT?  What does it do?

The signature in a JWT is one of the three parts of the token (along with header and payload). It is created by taking the encoded header, encoded payload, a secret key, and applying a signing algorithm. The signature is used to verify that the sender of the JWT is who it says it is and to ensure that the message wasn't changed along the way.



- If a JWT is intercepted, can the attacker see what's inside the payload?
Yes, by default, the contents of a JWT's payload are base64-encoded, not encrypted. Base64 encoding is a reversible process, so if someone intercepts the JWT, they can easily decode the payload and see its contents. However, the integrity of the payload is protected by the signature.



- How can you implement authentication with a JWT?  Describe how it works at a high level.
In JWT-based authentication, when a user logs in, the server generates a JWT and sends it back to the client. The client includes this JWT in the header of subsequent requests. The server verifies the JWT's signature to ensure its integrity and authenticity, and then it extracts user information from the decoded payload to authenticate the user.



- Compare and contrast unit, integration and end-to-end tests.
Unit tests focus on testing individual components or functions in isolation. Integration tests verify the interaction between different components or modules. End-to-end tests check the complete flow of an application, often involving multiple subsystems. Unit tests are fast and pinpoint issues, while integration and end-to-end tests provide a broader view of system behavior.

- What is a mock? What are some things you would mock?
A mock is a simulated object or function that mimics the behavior of a real object or function. Mocks are used in testing to isolate and focus on specific components. Examples of things to mock include external services, database calls, or complex functions to create controlled test environments.

- What is continuous integration?
Continuous Integration (CI) is a software development practice where code changes are automatically built, tested, and integrated into a shared repository multiple times a day. The goal is to detect and address integration issues early in the development process.

- What is an environment variable and what are they used for?
An environment variable is a variable outside the application code that stores configuration settings or system information. They are used to configure the behavior of applications and to provide an abstraction between the application and the environment it runs in.


- What is TDD? What are some benefits and drawbacks?
Test-Driven Development (TDD) is a software development approach where tests are written before the actual code. Benefits include improved code quality, early bug detection, and a safety net for refactoring. Drawbacks may include the initial time investment in writing tests first and potential challenges in certain design scenarios.



- What is the value of using JSONSchema for validation?
JSONSchema is a standard for describing the structure of JSON data. Using JSONSchema for validation ensures that data adheres to a predefined structure, improving data quality and helping to catch errors early in the development process.


- What are some ways to decide which code to test?
Code that handles critical business logic, user input, and error-prone areas should be tested. Additionally, code that frequently changes or is part of a complex system is a good candidate for testing.



- What does `RETURNING` do in SQL? When would you use it?
RETURNING is a clause in SQL that is used with data modification statements (like INSERT, UPDATE, or DELETE). It allows the statement to return the values of columns after the modification is executed. This can be useful to retrieve information about the affected rows.



- What are some differences between Web Sockets and HTTP?
Web Sockets provide full-duplex communication channels over a single, long-lived connection, allowing real-time bidirectional communication. HTTP is a stateless request-response protocol. Web Sockets are more efficient for real-time applications, while HTTP is suitable for traditional request-response interactions.



- Did you prefer using Flask over Express? Why or why not (there is no right
  answer here --- we want to see how you think about technology)?
I personally enjoy Flask more since it is quite easy to grasp and I can create more codes with it but at the same type I like the format that Express allow me to create , As long as you have some imagination you can create great code using Express.