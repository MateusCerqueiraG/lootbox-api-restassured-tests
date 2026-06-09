package tests;

import config.BaseTest;
import models.User;
import org.junit.jupiter.api.Test;
import services.UserService;

import static io.restassured.RestAssured.given;
import static org.hamcrest.Matchers.notNullValue;

public class InventoryTests extends BaseTest {

    @Test
    public void shouldGetInventory() {

        String name = "inventory_test_" + System.currentTimeMillis();

        User user = UserService
                .createUser(name)
                .then()
                .statusCode(201)
                .extract()
                .as(User.class);

        given()
        .when()
            .get("/users/" + user.getId() + "/inventory")
        .then()
            .statusCode(200)
            .body("inventory", notNullValue());

        UserService.deleteUser(user.getId());
    }
}