package services;

import io.restassured.response.Response;

import static io.restassured.RestAssured.given;

public class LootBoxService {

    // abrir lootbox
    public static Response openLootBox(int userId) {
        return given()
                .pathParam("id", userId)
                .when()
                .post("/users/{id}/lootbox/open");
    }
}