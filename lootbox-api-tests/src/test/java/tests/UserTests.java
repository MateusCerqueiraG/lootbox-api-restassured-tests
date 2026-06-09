package tests;

import config.BaseTest;
import io.restassured.response.Response;
import models.User;
import org.junit.jupiter.api.*;

import services.UserService;
import utils.RandomUtils;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@TestMethodOrder(MethodOrderer.OrderAnnotation.class)
public class UserTests extends BaseTest {

    private static final List<Integer> createdUserIds = new ArrayList<>();

    // =========================
    // CREATE MULTIPLE USERS
    // =========================
    @Test
    @Order(1)
    public void shouldCreateMultipleUsers() {

        for (int i = 0; i < 3; i++) {

            String name = RandomUtils.randomName();

            Response response = UserService.createUser(name);

            response.then().statusCode(201);

            User user = response.as(User.class);

            createdUserIds.add(user.getId());

            assertNotNull(user.getId());
            assertEquals(name, user.getName());
        }
    }

    // =========================
    // LOGIN USER (TEST EXAMPLE)
    // =========================
    @Test
    @Order(2)
    public void shouldLoginFirstUser() {

        String name = RandomUtils.randomName();

        Response create = UserService.createUser(name);
        create.then().statusCode(201);

        User user = create.as(User.class);

        Response login = UserService.login(name);

        login.then().statusCode(200);

        assertEquals(name, login.as(User.class).getName());

        createdUserIds.add(user.getId());
    }

    // =========================
    // CLEANUP ALL USERS
    // =========================
    @AfterAll
    public static void tearDown() {

        for (Integer id : createdUserIds) {

            try {
                UserService.deleteUser(id)
                        .then()
                        .statusCode(200);

            } catch (Exception e) {
                System.out.println("Erro ao deletar usuário ID: " + id);
            }
        }

        createdUserIds.clear();
    }
}