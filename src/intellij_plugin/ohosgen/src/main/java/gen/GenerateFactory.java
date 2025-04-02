package gen;

import parse.ParseBase;
import parse.ParseCpp;
import parse.ParseTs;

import java.util.Locale;

/**
 * <h3>类名：该类用于xxx</h3>
 * description create generator
 *
 * @author Administrator
 *         date 2025-02-28
 * @version 1.0
 * @since 2025-02-28
 */
public class GenerateFactory {
    /**
     * 获取解析类
     *
     * @param type 解析类型
     * @return 解析类 (类型不存在时候抛出异常）
     * @throws IllegalArgumentException 非法参数异常
     */
    public static GeneratorBase getGenerator(String type) {
        return switch (type.toUpperCase(Locale.ROOT)) {
            case "CPP" -> new GenCppFile();
            case "DTS" -> new GenDtsFile();
            default -> {
                System.out.println("Unsupported parser type: " + type);
                throw new IllegalArgumentException("Unsupported parser type: " + type);
            }
        };
    }
}
