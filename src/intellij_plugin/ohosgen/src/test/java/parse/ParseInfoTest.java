/*
 * Copyright (c) 2025 Shenzhen Kaihong Digital.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package parse;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

/**
 * <h3>类名：该类用于xxx</h3>
 * description
 *
 * @author Administrator
 *         date 2025-02-28
 * @version 1.0
 * @since 2025-02-28
 */
class ParseInfoTest {

    @BeforeEach
    void setUp() {
    }

    @AfterEach
    void tearDown() {
    }

    @Test
    void setStatus() {
        ParseInfo pi = new ParseInfo("complete", "parse c finished", 100, 100);
        ObjectMapper mapper = new ObjectMapper();
        try {
            String jsonStr = mapper.writeValueAsString(pi);
            System.out.println("Test setStatus: " + jsonStr);
            pi.setStatus("start");
            jsonStr = mapper.writeValueAsString(pi);
            System.out.println("Test setStatus: " + jsonStr);
            assertEquals("start", pi.getStatus());
        } catch (JsonProcessingException e) {
            System.out.println("Test setStatus catch: " + e.getMessage());
            fail();
        }
    }

    @Test
    void getStatus() {
        ParseInfo pi = new ParseInfo("complete", "parse c finished", 100, 100);
        ObjectMapper mapper = new ObjectMapper();
        try {
            String jsonStr = mapper.writeValueAsString(pi);
            System.out.println("Test getStatus: " + jsonStr);
            String value = pi.getStatus();
            jsonStr = mapper.writeValueAsString(pi);
            assertEquals("complete", value);
            System.out.println("Test getStatus: " + value);
        } catch (JsonProcessingException e) {
            System.out.println("Test getStatus catch: " + e.getMessage());
            fail();
        }
    }

    @Test
    void setMessage() {
        ParseInfo pi = new ParseInfo("complete", "parse c finished", 100, 100);
        ObjectMapper mapper = new ObjectMapper();
        try {
            String jsonStr = mapper.writeValueAsString(pi);
            System.out.println("Test setMessage: " + jsonStr);
            pi.setMessage("start parse c");
            jsonStr = mapper.writeValueAsString(pi);
            System.out.println("Test setMessage: " + jsonStr);
            assertEquals("start parse c", pi.getMessage());
        } catch (JsonProcessingException e) {
            System.out.println("Test setMessage catch: " + e.getMessage());
            fail();
        }
    }

    @Test
    void getMessage() {
        ParseInfo pi = new ParseInfo("complete", "parse c finished", 100, 100);
        ObjectMapper mapper = new ObjectMapper();
        try {
            String jsonStr = mapper.writeValueAsString(pi);
            System.out.println("Test getMessage: " + jsonStr);
            String value = pi.getMessage();
            jsonStr = mapper.writeValueAsString(pi);
            System.out.println("Test getMessage: " + value);
            assertEquals("parse c finished", value);
        } catch (JsonProcessingException e) {
            System.out.println("Test getMessage catch: " + e.getMessage());
            fail();
        }
    }

    @Test
    void setProgress() {
        ParseInfo pi = new ParseInfo("complete", "parse c finished", 100, 100);
        ObjectMapper mapper = new ObjectMapper();
        try {
            String jsonStr = mapper.writeValueAsString(pi);
            System.out.println("Test setProgress: " + jsonStr);
            pi.setProgress(0);
            jsonStr = mapper.writeValueAsString(pi);
            System.out.println("Test setProgress: " + jsonStr);
            assertEquals(0, pi.getProgress());
        } catch (JsonProcessingException e) {
            System.out.println("Test setProgress catch: " + e.getMessage());
            fail();
        }
    }

    @Test
    void getProgress() {
        ParseInfo pi = new ParseInfo("complete", "parse c finished", 100, 100);
        ObjectMapper mapper = new ObjectMapper();
        try {
            String jsonStr = mapper.writeValueAsString(pi);
            System.out.println("Test getProgress: " + jsonStr);
            int value = pi.getProgress();
            jsonStr = mapper.writeValueAsString(pi);
            System.out.println("Test getProgress: " + value);
            assertEquals(100, value);
        } catch (JsonProcessingException e) {
            System.out.println("Test getProgress catch: " + e.getMessage());
            fail();
        }
    }

    @Test
    void setTotal() {
        ParseInfo pi = new ParseInfo("complete", "parse c finished", 100, 100);
        ObjectMapper mapper = new ObjectMapper();
        try {
            String jsonStr = mapper.writeValueAsString(pi);
            System.out.println("Test setTotal: " + jsonStr);
            pi.setTotal(0);
            jsonStr = mapper.writeValueAsString(pi);
            System.out.println("Test setTotal: " + jsonStr);
            assertEquals(0, pi.getTotal());
        } catch (JsonProcessingException e) {
            System.out.println("Test setTotal catch: " + e.getMessage());
            fail();
        }
    }

    @Test
    void getTotal() {
        ParseInfo pi = new ParseInfo("complete", "parse c finished", 100, 100);
        ObjectMapper mapper = new ObjectMapper();
        try {
            String jsonStr = mapper.writeValueAsString(pi);
            System.out.println("Test getTotal: " + jsonStr);
            int value = pi.getTotal();
            jsonStr = mapper.writeValueAsString(pi);
            System.out.println("Test getTotal: " + value);
            assertEquals(100, value);
        } catch (JsonProcessingException e) {
            System.out.println("Test getTotal catch: " + e.getMessage());
            fail();
        }
    }

    @Test
    void toJson() {
        ParseInfo pi = new ParseInfo("complete", "parse c finished", 100, 100);
        ObjectMapper mapper = new ObjectMapper();
        String expStr = "{\"status\":\"complete\",\"message\":\"parse c finished\",\"progress\":100,\"total\":100}";
        try {
            String jsonStr = mapper.writeValueAsString(pi);
            System.out.println("Test getTotal: " + jsonStr);
            assertEquals(expStr, jsonStr);
        } catch (JsonProcessingException e) {
            System.out.println("Test getTotal catch: " + e.getMessage());
            fail();
        }
    }

    @Test
    void fromJson() {
        ParseInfo pi = new ParseInfo("complete", "parse c finished", 100, 100);
        ObjectMapper mapper = new ObjectMapper();
        try {
            String jsonStr = mapper.writeValueAsString(pi);
            System.out.println("Test fromJson: " + jsonStr);
            ParseInfo pi2 = mapper.readValue(jsonStr, ParseInfo.class);

            assertEquals("complete", pi2.getStatus());
            assertEquals("parse c finished", pi2.getMessage());
            assertEquals(100, pi2.getProgress());
            assertEquals(100, pi2.getTotal());
        } catch (JsonProcessingException e) {
            System.out.println("Test fromJson catch: " + e.getMessage());
            fail();
        }
    }
}