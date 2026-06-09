package utils;

import java.util.UUID;
import java.util.concurrent.ThreadLocalRandom;

public class RandomUtils {

    // nome único
    public static String randomName() {
        return "user_" + UUID.randomUUID().toString().substring(0, 8);
    }

    // número aleatório dentro de range
    public static int randomInt(int min, int max) {
        return ThreadLocalRandom.current().nextInt(min, max + 1);
    }

    // email fake
    public static String randomEmail() {
        return "user_" + UUID.randomUUID().toString().substring(0, 6) + "@test.com";
    }
}