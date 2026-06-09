package services;

import io.restassured.response.Response;

import static io.restassured.RestAssured.given;

public class UserService {

    // CREATE USER
    public static Response createUser(String name) {
        return given()
                .contentType("application/json")
                .body("{\"name\":\"" + name + "\"}")
                .when()
                .post("/users");
    }

    // LOGIN USER
    public static Response login(String name) {
        return given()
                .when()
                .get("/users/login/" + name);
    }

    // DELETE USER
    public static Response deleteUser(int id) {
        return given()
                .when()
                .delete("/users/" + id);
    }

    // GET ALL USERS (opcional)
    public static Response getUsers() {
        return given()
                .when()
                .get("/users");
    }
}