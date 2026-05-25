```mermaid
erDiagram
    Employee ||--o{ Application : Places
    Employee {
        String ID
        String Email
        String Password
        String lFirstName
        String lLastName
        String pName
        Bool Membership
        int Education
        String Major
        int Experience
    }
    Application {
        String ID
        String ListingID
        String EmployeeID
        String DatePlaced
        Bool Resolved
    }
    Application }o--o{ Listing : for
    Listing {
        String ID
        String CompanyID
        String Title
        String Description
        int Education
        String Skills
        String Experience
        int WorkMode
        String Location
        Date DatePosted
    }
    Listing }o--|| Employer : Posts
    Employer {
        String ID
        String BIN
        String Name
        String Industry
        String Email
        String Password
    }
    Application ||--o| Response : Receives
    Response {
        String ApplicationID
        Bool Status
        String Message
    }