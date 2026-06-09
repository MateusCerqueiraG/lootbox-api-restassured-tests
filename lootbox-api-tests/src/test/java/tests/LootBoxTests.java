package tests;

import config.BaseTest;
import models.User;
import org.junit.jupiter.api.Test;
import services.LootBoxService;
import services.UserService;

import static org.hamcrest.Matchers.notNullValue;

public class LootBoxTests extends BaseTest {

    @Test
    public void shouldOpenLootBox() {

        String name = "lootbox_test_" + System.currentTimeMillis();

        User user = UserService
                .createUser(name)
                .then()
                .statusCode(201)
                .extract()
                .as(User.class);

        LootBoxService
                .openLootBox(user.getId())
                .then()
                .statusCode(200)
                .body("item.name", notNullValue())
                .body("coins", notNullValue());

        UserService.deleteUser(user.getId());
    }
}