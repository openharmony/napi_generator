    TEST_IGNORE();
#else
    TEST_ASSERT_FLOAT_WITHIN(0.00003f, 187245.03485f, 187245.03488f);
    TEST_ASSERT_FLOAT_WITHIN(1.0f, 187245.0f, 187246.0f);
    TEST_ASSERT_FLOAT_WITHIN(0.05f, 9273.2549f, 9273.2049f);
    TEST_ASSERT_FLOAT_WITHIN(0.007f, -726.93724f, -726.94424f);
#endif
}

void testFloatsNotWithinDelta(void)
{
#ifdef UNITY_EXCLUDE_FLOAT
    TEST_IGNORE();
#else
    EXPECT_ABORT_BEGIN
    TEST_ASSERT_FLOAT_WITHIN(0.05f, 9273.2649f, 9273.2049f);
    VERIFY_FAILS_END
#endif
}

void testFloatsEqual(void)
{
#ifdef UNITY_EXCLUDE_FLOAT
    TEST_IGNORE();
#else
    TEST_ASSERT_EQUAL_FLOAT(187245.0f, 187246.0f);
    TEST_ASSERT_EQUAL_FLOAT(18724.5f, 18724.6f);
    TEST_ASSERT_EQUAL_FLOAT(9273.2549f, 9273.2599f);
    TEST_ASSERT_EQUAL_FLOAT(-726.93724f, -726.9374f);
#endif
}

void testFloatsNotEqual(void)
{
#ifdef UNITY_EXCLUDE_FLOAT
    TEST_IGNORE();
#else
    EXPECT_ABORT_BEGIN
    TEST_ASSERT_EQUAL_FLOAT(9273.9649f, 9273.0049f);
    VERIFY_FAILS_END
#endif
}

void testFloatsNotEqualNegative1(void)
{
#ifdef UNITY_EXCLUDE_FLOAT
    TEST_IGNORE();
#else
    EXPECT_ABORT_BEGIN
    TEST_ASSERT_EQUAL_FLOAT(-9273.9649f, -9273.0049f);
    VERIFY_FAILS_END
#endif
}

void testFloatsNotEqualNegative2(void)
{
#ifdef UNITY_EXCLUDE_FLOAT
    TEST_IGNORE();
#else
    EXPECT_ABORT_BEGIN
    TEST_ASSERT_EQUAL_FLOAT(-9273.0049f, -9273.9649f);
    VERIFY_FAILS_END
#endif
}

void testFloatsNotEqualActualNaN(void)
{
#ifdef UNITY_EXCLUDE_FLOAT
    TEST_IGNORE();
#else
    EXPECT_ABORT_BEGIN
    TEST_ASSERT_EQUAL_FLOAT(85.963f, 0.0f / f_zero);
    VERIFY_FAILS_END
#endif
}

void testFloatsNotEqualExpectedNaN(void)
{
#ifdef UNITY_EXCLUDE_FLOAT
    TEST_IGNORE();
#else
    EXPECT_ABORT_BEGIN
    TEST_ASSERT_EQUAL_FLOAT(0.0f / f_zero, 85.963f);
    VERIFY_FAILS_END
#endif
}

void testFloatsEqualBothNaN(void)
{
#ifdef UNITY_EXCLUDE_FLOAT
    TEST_IGNORE();
#else
    TEST_ASSERT_EQUAL_FLOAT(0.0f / f_zero, 0.0f / f_zero);
#endif
}

void testFloatsNotEqualInfNaN(void)
{
#ifdef UNITY_EXCLUDE_FLOAT
    TEST_IGNORE();
#else
    EXPECT_ABORT_BEGIN
    TEST_ASSERT_EQUAL_FLOAT(1.0f / f_zero, 0.0f / f_zero);
    VERIFY_FAILS_END
#endif
}

void testFloatsNotEqualNaNInf(void)
{
#ifdef UNITY_EXCLUDE_FLOAT
    TEST_IGNORE();
#else
    EXPECT_ABORT_BEGIN
    TEST_ASSERT_EQUAL_FLOAT(0.0f / f_zero, 1.0f / f_zero);
    VERIFY_FAILS_END
#endif
}

void testFloatsNotEqualActualInf(void)
{
#ifdef UNITY_EXCLUDE_FLOAT
    TEST_IGNORE();
#else
    EXPECT_ABORT_BEGIN
    TEST_ASSERT_EQUAL_FLOAT(321.642f, 1.0f / f_zero);
    VERIFY_FAILS_END
#endif
}

void testFloatsNotEqualExpectedInf(void)
{
#ifdef UNITY_EXCLUDE_FLOAT
    TEST_IGNORE();
#else
    EXPECT_ABORT_BEGIN
    TEST_ASSERT_EQUAL_FLOAT(1.0f / f_zero, 321.642f);
    VERIFY_FAILS_END
#endif
}

void testFloatsEqualBothInf(void)
{
#ifdef UNITY_EXCLUDE_FLOAT
    TEST_IGNORE();
#else
    TEST_ASSERT_EQUAL_FLOAT(1.0f / f_zero, 1.0f / f_zero);
#endif
}

void testFloatsNotEqualPlusMinusInf(void)
{
#ifdef UNITY_EXCLUDE_FLOAT
    TEST_IGNORE();
#else
    EXPECT_ABORT_BEGIN
    TEST_ASSERT_EQUAL_FLOAT(1.0f / f_zero, -1.0f / f_zero);
    VERIFY_FAILS_END
#endif
}

void testFloatIsPosInf1(void)
{
#ifdef UNITY_EXCLUDE_FLOAT
    TEST_IGNORE();
#else
    TEST_ASSERT_FLOAT_IS_INF(2.0f / f_zero);
#endif
}

void testFloatIsPosInf2(void)
{
#ifdef UNITY_EXCLUDE_FLOAT
    TEST_IGNORE();
#else
    EXPECT_ABORT_BEGIN
    TEST_ASSERT_FLOAT_IS_NOT_INF(2.0f / f_zero);
    VERIFY_FAILS_END
#endif
}

void testFloatIsNegInf1(void)
{
#ifdef UNITY_EXCLUDE_FLOAT
    TEST_IGNORE();
#else
    TEST_ASSERT_FLOAT_IS_NEG_INF(-3.0f / f_zero);
#endif
}

void testFloatIsNegInf2(void)
{
#ifdef UNITY_EXCLUDE_FLOAT
    TEST_IGNORE();
#else
    EXPECT_ABORT_BEGIN
    TEST_ASSERT_FLOAT_IS_NOT_NEG_INF(-3.0f / f_zero);
    VERIFY_FAILS_END
#endif
}

void testFloatIsNotPosInf1(void)
{
#ifdef UNITY_EXCLUDE_FLOAT
    TEST_IGNORE();
#else
    EXPECT_ABORT_BEGIN
    TEST_ASSERT_FLOAT_IS_INF(2.0f);
    VERIFY_FAILS_END
#endif
}

void testFloatIsNotPosInf2(void)
{
#ifdef UNITY_EXCLUDE_FLOAT
    TEST_IGNORE();
#else
    TEST_ASSERT_FLOAT_IS_NOT_INF(2.0f);
#endif
}

void testFloatIsNotNegInf(void)
{
#ifdef UNITY_EXCLUDE_FLOAT
    TEST_IGNORE();
#else
    EXPECT_ABORT_BEGIN
    TEST_ASSERT_FLOAT_IS_NEG_INF(-999.876f);
    VERIFY_FAILS_END
#endif
}

void testFloatIsNan1(void)
{
#ifdef UNITY_EXCLUDE_FLOAT
    TEST_IGNORE();
#else
    TEST_ASSERT_FLOAT_IS_NAN(0.0f / f_zero);
#endif
}

void testFloatIsNan2(void)
{
#ifdef UNITY_EXCLUDE_FLOAT
    TEST_IGNORE();
#else
    EXPECT_ABORT_BEGIN
    TEST_ASSERT_FLOAT_IS_NOT_NAN(0.0f / f_zero);
    VERIFY_FAILS_END
#endif
}

void testFloatIsNotNan1(void)
{
#ifdef UNITY_EXCLUDE_FLOAT
    TEST_IGNORE();
#else
    EXPECT_ABORT_BEGIN
    TEST_ASSERT_FLOAT_IS_NAN(234.9f);
    VERIFY_FAILS_END
#endif
}

void testFloatIsNotNan2(void)
{
#ifdef UNITY_EXCLUDE_FLOAT
    TEST_IGNORE();
#else
    TEST_ASSERT_FLOAT_IS_NOT_NAN(234.9f);
#endif
}

void testFloatInfIsNotNan(void)
{
#ifdef UNITY_EXCLUDE_FLOAT
    TEST_IGNORE();
#else
    EXPECT_ABORT_BEGIN
    TEST_ASSERT_FLOAT_IS_NAN(1.0f / f_zero);
    VERIFY_FAILS_END
#endif
}

void testFloatNanIsNotInf(void)
{
#ifdef UNITY_EXCLUDE_FLOAT
    TEST_IGNORE();
#else
    EXPECT_ABORT_BEGIN
    TEST_ASSERT_FLOAT_IS_INF(0.0f / f_zero);
    VERIFY_FAILS_END
#endif
}

void testFloatIsDeterminate1(void)
{
#ifdef UNITY_EXCLUDE_FLOAT
    TEST_IGNORE();
#else
    TEST_ASSERT_FLOAT_IS_DETERMINATE(0.0f);
    TEST_ASSERT_FLOAT_IS_DETERMINATE(123.3f);
    TEST_ASSERT_FLOAT_IS_DETERMINATE(-88.3f);
#endif
}

void testFloatIsDeterminate2(void)
{
#ifdef UNITY_EXCLUDE_FLOAT
    TEST_IGNORE();
#else
    EXPECT_ABORT_BEGIN
    TEST_ASSERT_FLOAT_IS_NOT_DETERMINATE(-88.3f);
    VERIFY_FAILS_END
#endif
}

void testFloatIsNotDeterminate1(void)
{
#ifdef UNITY_EXCLUDE_FLOAT
    TEST_IGNORE();
#else
    TEST_ASSERT_FLOAT_IS_NOT_DETERMINATE(1.0f / f_zero);
    TEST_ASSERT_FLOAT_IS_NOT_DETERMINATE(-1.0f / f_zero);
    TEST_ASSERT_FLOAT_IS_NOT_DETERMINATE(0.0f / f_zero);
#endif
}

void testFloatIsNotDeterminate2(void)
{
#ifdef UNITY_EXCLUDE_FLOAT
    TEST_IGNORE();
#else
    EXPECT_ABORT_BEGIN
    TEST_ASSERT_FLOAT_IS_DETERMINATE(-1.0f / f_zero);
    VERIFY_FAILS_END
#endif
}

void testFloatTraitFailsOnInvalidTrait(void)
{
#ifdef UNITY_EXCLUDE_FLOAT
    TEST_IGNORE();
#else
    EXPECT_ABORT_BEGIN
    UnityAssertFloatSpecial(1.0f, NULL, __LINE__, UNITY_FLOAT_INVALID_TRAIT);
    VERIFY_FAILS_END
#endif
}


void testEqualFloatArrays(void)
{
#ifdef UNITY_EXCLUDE_FLOAT
    TEST_IGNORE();
#else
    float p0[] = {1.0f, -8.0f,  25.4f, -0.123f};
    float p1[] = {1.0f, -8.0f,  25.4f, -0.123f};
    float p2[] = {1.0f, -8.0f,  25.4f, -0.2f};
    float p3[] = {1.0f, -23.0f, 25.0f, -0.26f};

    TEST_ASSERT_EQUAL_FLOAT_ARRAY(p0, p0, 1);
    TEST_ASSERT_EQUAL_FLOAT_ARRAY(p0, p0, 4);
    TEST_ASSERT_EQUAL_FLOAT_ARRAY(p0, p1, 4);
    TEST_ASSERT_EQUAL_FLOAT_ARRAY(p0, p2, 3);
    TEST_ASSERT_EQUAL_FLOAT_ARRAY(p0, p3, 1);
    TEST_ASSERT_EQUAL_FLOAT_ARRAY(NULL, NULL, 1);
#endif
}

void testNotEqualFloatArraysExpectedNull(void)
{
#ifdef UNITY_EXCLUDE_FLOAT
    TEST_IGNORE();
#else
    float* p0 = NULL;
    float p1[] = {1.0f, 8.0f, 25.4f, 0.252f};

    EXPECT_ABORT_BEGIN
    TEST_ASSERT_EQUAL_FLOAT_ARRAY(p0, p1, 4);
    VERIFY_FAILS_END
#endif
}

void testNotEqualFloatArraysActualNull(void)
{
#ifdef UNITY_EXCLUDE_FLOAT
    TEST_IGNORE();
#else
    float p0[] = {1.0f, 8.0f, 25.4f, 0.253f};
    float* p1 = NULL;

    EXPECT_ABORT_BEGIN
    TEST_ASSERT_EQUAL_FLOAT_ARRAY(p0, p1, 4);
    VERIFY_FAILS_END
#endif
}

void testNotEqualFloatArrays1(void)
{
#ifdef UNITY_EXCLUDE_FLOAT
    TEST_IGNORE();
#else
    float p0[] = {1.0f, 8.0f, 25.4f, 0.253f};
    float p1[] = {1.0f, 8.0f, 25.4f, 0.252f};

    EXPECT_ABORT_BEGIN
    TEST_ASSERT_EQUAL_FLOAT_ARRAY(p0, p1, 4);
    VERIFY_FAILS_END
#endif
}

void testNotEqualFloatArrays2(void)
{
#ifdef UNITY_EXCLUDE_FLOAT
    TEST_IGNORE();
#else
    float p0[] = {1.0f, 8.0f, 25.4f, 0.253f};
    float p1[] = {2.0f, 8.0f, 25.4f, 0.253f};

    EXPECT_ABORT_BEGIN
    TEST_ASSERT_EQUAL_FLOAT_ARRAY(p0, p1, 4);
    VERIFY_FAILS_END
#endif
}

void testNotEqualFloatArrays3(void)
{
#ifdef UNITY_EXCLUDE_FLOAT
    TEST_IGNORE();
#else
    float p0[] = {1.0f, 8.0f, 25.4f, 0.253f};
    float p1[] = {1.0f, 8.0f, 25.5f, 0.253f};

    EXPECT_ABORT_BEGIN
    TEST_ASSERT_EQUAL_FLOAT_ARRAY(p0, p1, 4);
    VERIFY_FAILS_END
#endif
}

void testNotEqualFloatArraysNegative1(void)
{
#ifdef UNITY_EXCLUDE_FLOAT
    TEST_IGNORE();
#else
    float p0[] = {-1.0f, -8.0f, -25.4f, -0.253f};
    float p1[] = {-1.0f, -8.0f, -25.4f, -0.252f};

    EXPECT_ABORT_BEGIN
    TEST_ASSERT_EQUAL_FLOAT_ARRAY(p0, p1, 4);
    VERIFY_FAILS_END
#endif
}

void testNotEqualFloatArraysNegative2(void)
{
#ifdef UNITY_EXCLUDE_FLOAT
    TEST_IGNORE();
#else
    float p0[] = {-1.0f, -8.0f, -25.4f, -0.253f};
    float p1[] = {-2.0f, -8.0f, -25.4f, -0.253f};

    EXPECT_ABORT_BEGIN
    TEST_ASSERT_EQUAL_FLOAT_ARRAY(p0, p1, 4);
    VERIFY_FAILS_END
#endif
}

void testNotEqualFloatArraysNegative3(void)
{
#ifdef UNITY_EXCLUDE_FLOAT
    TEST_IGNORE();
#else
    float p0[] = {-1.0f, -8.0f, -25.4f, -0.253f};
    float p1[] = {-1.0f, -8.0f, -25.5f, -0.253f};

    EXPECT_ABORT_BEGIN
    TEST_ASSERT_EQUAL_FLOAT_ARRAY(p0, p1, 4);
    VERIFY_FAILS_END
#endif
}

void testEqualFloatArraysNaN(void)
{
#ifdef UNITY_EXCLUDE_FLOAT
    TEST_IGNORE();
#else
    float p0[] = {1.0f, 0.0f / f_zero, 25.4f, 0.253f};
    float p1[] = {1.0f, 0.0f / f_zero, 25.4f, 0.253f};

    TEST_ASSERT_EQUAL_FLOAT_ARRAY(p0, p1, 4);
#endif
}

void testEqualFloatArraysInf(void)
{
#ifdef UNITY_EXCLUDE_FLOAT
    TEST_IGNORE();
#else
    float p0[] = {1.0f, 1.0f / f_zero, 25.4f, 0.253f};
    float p1[] = {1.0f, 1.0f / f_zero, 25.4f, 0.253f};

    TEST_ASSERT_EQUAL_FLOAT_ARRAY(p0, p1, 4);
#endif
}

void testNotEqualFloatArraysLengthZero(void)
{
#ifdef UNITY_EXCLUDE_FLOAT
    TEST_IGNORE();
#else
    float p0[1] = {0.0f};
    float p1[1] = {0.0f};

    EXPECT_ABORT_BEGIN
    TEST_ASSERT_EQUAL_FLOAT_ARRAY(p0, p1, 0);
    VERIFY_FAILS_END
#endif
}

void testEqualFloatEachEqual(void)
{
#ifdef UNITY_EXCLUDE_FLOAT
    TEST_IGNORE();
#else
    float p0[] = {1.0f, 1.0f, 1.0f, 1.0f};
    float p1[] = {-0.123f, -0.123f, -0.123f, -0.123f};
    float p2[] = {25.4f, 25.4f, 25.4f, -0.2f};
    float p3[] = {1.0f, -23.0f, 25.0f, -0.26f};

    TEST_ASSERT_EACH_EQUAL_FLOAT(1.0f, p0, 1);
    TEST_ASSERT_EACH_EQUAL_FLOAT(1.0f, p0, 4);
    TEST_ASSERT_EACH_EQUAL_FLOAT(-0.123f, p1, 4);
    TEST_ASSERT_EACH_EQUAL_FLOAT(25.4f, p2, 3);
    TEST_ASSERT_EACH_EQUAL_FLOAT(1.0f, p3, 1);
#endif
}

void testNotEqualFloatEachEqualActualNull(void)
{
#ifdef UNITY_EXCLUDE_FLOAT
    TEST_IGNORE();
#else
    float* p0 = NULL;

    EXPECT_ABORT_BEGIN
    TEST_ASSERT_EACH_EQUAL_FLOAT(5, p0, 4);
    VERIFY_FAILS_END
#endif
}

void testNotEqualFloatEachEqual1(void)
{
#ifdef UNITY_EXCLUDE_FLOAT
    TEST_IGNORE();
#else
    float p0[] = {0.253f, 8.0f, 0.253f, 0.253f};

    EXPECT_ABORT_BEGIN
    TEST_ASSERT_EACH_EQUAL_FLOAT(0.253f, p0, 4);
    VERIFY_FAILS_END
#endif
}

void testNotEqualFloatEachEqual2(void)
{
#ifdef UNITY_EXCLUDE_FLOAT
    TEST_IGNORE();
#else
    float p0[] = {8.0f, 8.0f, 8.0f, 0.253f};

    EXPECT_ABORT_BEGIN
    TEST_ASSERT_EACH_EQUAL_FLOAT(8.0f, p0, 4);
    VERIFY_FAILS_END
#endif
}

void testNotEqualFloatEachEqual3(void)
{
#ifdef UNITY_EXCLUDE_FLOAT
    TEST_IGNORE();
#else
    float p0[] = {1.0f, 1.0f, 1.0f, 0.253f};

    EXPECT_ABORT_BEGIN
    TEST_ASSERT_EACH_EQUAL_FLOAT(1.0f, p0, 4);
    VERIFY_FAILS_END
#endif
}

void testNotEqualFloatEachEqualNegative1(void)
{
#ifdef UNITY_EXCLUDE_FLOAT
    TEST_IGNORE();
#else
    float p0[] = {-1.0f, -0.253f, -0.253f, -0.253f};

    EXPECT_ABORT_BEGIN
    TEST_ASSERT_EACH_EQUAL_FLOAT(-0.253f, p0, 4);
    VERIFY_FAILS_END
#endif
}

void testNotEqualFloatEachEqualNegative2(void)
{
#ifdef UNITY_EXCLUDE_FLOAT
    TEST_IGNORE();
#else
    float p0[] = {-25.4f, -8.0f, -25.4f, -25.4f};

    EXPECT_ABORT_BEGIN
    TEST_ASSERT_EACH_EQUAL_FLOAT(-25.4f, p0, 4);
    VERIFY_FAILS_END
#endif
}

void testNotEqualFloatEachEqualNegative3(void)
{
#ifdef UNITY_EXCLUDE_FLOAT
    TEST_IGNORE();
#else
    float p0[] = {-8.0f, -8.0f, -8.0f, -0.253f};

    EXPECT_ABORT_BEGIN
    TEST_ASSERT_EACH_EQUAL_FLOAT(-8.0f, p0, 4);
    VERIFY_FAILS_END
#endif
}

void testEqualFloatEachEqualNaN(void)
{
#ifdef UNITY_EXCLUDE_FLOAT
    TEST_IGNORE();
#else
    float p0[] = {0.0f / f_zero, 0.0f / f_zero, 0.0f / f_zero, 0.0f / f_zero};

    TEST_ASSERT_EACH_EQUAL_FLOAT(0.0f / f_zero, p0, 4);
#endif
}

void testEqualFloatEachEqualInf(void)
{
#ifdef UNITY_EXCLUDE_FLOAT
    TEST_IGNORE();
#else
    float p0[] = {1.0f / f_zero, 1.0f / f_zero, 25.4f, 0.253f};

    TEST_ASSERT_EACH_EQUAL_FLOAT(1.0f / f_zero, p0, 2);
#endif
}

void testNotEqualFloatEachEqualLengthZero(void)
{
#ifdef UNITY_EXCLUDE_FLOAT
    TEST_IGNORE();
#else
    float p0[1] = {0.0f};

    EXPECT_ABORT_BEGIN
    TEST_ASSERT_EACH_EQUAL_FLOAT(0.0f, p0, 0);
    VERIFY_FAILS_END
#endif
}

#define TEST_ASSERT_EQUAL_PRINT_FLOATING(expected, actual) {            \
        startPutcharSpy(); UnityPrintFloat((actual)); endPutcharSpy();  \
        TEST_ASSERT_EQUAL_STRING((expected), getBufferPutcharSpy());    \
        }

void testFloatPrinting(void)
{
#if defined(UNITY_EXCLUDE_FLOAT_PRINT) || !defined(USING_OUTPUT_SPY)
    TEST_IGNORE();
#else
    TEST_ASSERT_EQUAL_PRINT_FLOATING("0",         0.0f);
    TEST_ASSERT_EQUAL_PRINT_FLOATING("4.99e-07",  0.000000499f);
    TEST_ASSERT_EQUAL_PRINT_FLOATING("5e-07",     0.00000050000005f);
    TEST_ASSERT_EQUAL_PRINT_FLOATING("0.100469",  0.100469499f);
    TEST_ASSERT_EQUAL_PRINT_FLOATING("1",         0.9999995f); /*Rounding to int place*/
    TEST_ASSERT_EQUAL_PRINT_FLOATING("1",         1.0f);
    TEST_ASSERT_EQUAL_PRINT_FLOATING("1.25",      1.25f);
    TEST_ASSERT_EQUAL_PRINT_FLOATING("7.99999",   7.99999f); /*Not rounding*/
    TEST_ASSERT_EQUAL_PRINT_FLOATING("16.0002",   16.0002f);
    TEST_ASSERT_EQUAL_PRINT_FLOATING("16.0004",   16.0004f);
    TEST_ASSERT_EQUAL_PRINT_FLOATING("16.0006",   16.0006f);
    TEST_ASSERT_EQUAL_PRINT_FLOATING("999999",    999999.0f); /*Last full print integer*/

    TEST_ASSERT_EQUAL_PRINT_FLOATING("-0",         -0.0f);
    TEST_ASSERT_EQUAL_PRINT_FLOATING("-4.99e-07",  -0.000000499f);
    TEST_ASSERT_EQUAL_PRINT_FLOATING("-5e-07",     -0.00000050000005f);
    TEST_ASSERT_EQUAL_PRINT_FLOATING("-0.100469",  -0.100469499f);
    TEST_ASSERT_EQUAL_PRINT_FLOATING("-1",         -0.9999995f); /*Rounding to int place*/
    TEST_ASSERT_EQUAL_PRINT_FLOATING("-1",         -1.0f);
    TEST_ASSERT_EQUAL_PRINT_FLOATING("-1.25",      -1.25f);
    TEST_ASSERT_EQUAL_PRINT_FLOATING("-7.99999",   -7.99999f); /*Not rounding*/
    TEST_ASSERT_EQUAL_PRINT_FLOATING("-16.0002",   -16.0002f);
    TEST_ASSERT_EQUAL_PRINT_FLOATING("-16.0004",   -16.0004f);
    TEST_ASSERT_EQUAL_PRINT_FLOATING("-16.0006",   -16.0006f);
    TEST_ASSERT_EQUAL_PRINT_FLOATING("-999999",    -999999.0f); /*Last full print integer*/

    TEST_ASSERT_EQUAL_PRINT_FLOATING("4.29497e+09", 4294967296.0f);
    TEST_ASSERT_EQUAL_PRINT_FLOATING("5e+09",       5000000000.0f);
    TEST_ASSERT_EQUAL_PRINT_FLOATING("8e+09",       8.0e+09f);
    TEST_ASSERT_EQUAL_PRINT_FLOATING("8.31e+09",    8309999104.0f);
    TEST_ASSERT_EQUAL_PRINT_FLOATING("1e+10",       1.0e+10f);
    TEST_ASSERT_EQUAL_PRINT_FLOATING("1e+10",       10000000000.0f);
    /* Some compilers have trouble with inexact float constants, a float cast works generally */
    TEST_ASSERT_EQUAL_PRINT_FLOATING("1.00005e+10", (float)1.000054e+10f);
    TEST_ASSERT_EQUAL_PRINT_FLOATING("1.1e+38",     (float)1.10000005e+38f);
    TEST_ASSERT_EQUAL_PRINT_FLOATING("1.6353e+10",  1.63529943e+10f);
    TEST_ASSERT_EQUAL_PRINT_FLOATING("3.40282e+38", 3.40282346638e38f);

    TEST_ASSERT_EQUAL_PRINT_FLOATING("-1e+10",       -1.0e+10f);
    TEST_ASSERT_EQUAL_PRINT_FLOATING("-3.40282e+38", -3.40282346638e38f);
#endif
}

void testFloatPrintingInfinityAndNaN(void)
{
#if defined(UNITY_EXCLUDE_FLOAT_PRINT) || !defined(USING_OUTPUT_SPY)
    TEST_IGNORE();
#else
    TEST_ASSERT_EQUAL_PRINT_FLOATING("inf",   1.0f / f_zero);
    TEST_ASSERT_EQUAL_PRINT_FLOATING("-inf", -1.0f / f_zero);

    TEST_ASSERT_EQUAL_PRINT_FLOATING("nan",   0.0f / f_zero);
#endif
}

#if defined(UNITY_TEST_ALL_FLOATS_PRINT_OK) && defined(USING_OUTPUT_SPY)
static void printFloatValue(float f)
{
    char expected[18];
    char expected_lower[18];
    char expected_higher[18];

    startPutcharSpy();

    UnityPrintFloat(f);

    sprintf(expected, "%.6g", f);

    /* We print all NaN's as "nan", not "-nan" */
    if(strcmp(expected, "-nan") == 0) strcpy(expected, "nan");

    /* Allow for rounding differences in last digit */
    double lower = (double)f * 0.9999995;
    double higher = (double)f * 1.0000005;

    if (isfinite(lower)) sprintf(expected_lower, "%.6g", lower); else strcpy(expected_lower, expected);
    if (isfinite(higher)) sprintf(expected_higher, "%.6g", higher); else strcpy(expected_higher, expected);

    if (strcmp(expected, getBufferPutcharSpy()) != 0 &&
        strcmp(expected_lower, getBufferPutcharSpy()) != 0 &&
        strcmp(expected_higher, getBufferPutcharSpy()) != 0)
    {
        /* Fail with diagnostic printing */
        TEST_ASSERT_EQUAL_PRINT_FLOATING(expected, f);
    }
}
#endif

void testFloatPrintingRandomSamples(void)
{
#if !defined(UNITY_TEST_ALL_FLOATS_PRINT_OK) || !defined(USING_OUTPUT_SPY)
    TEST_IGNORE();
#else
    union { float f_value; uint32_t int_value; } u;

    /* These values are not covered by the MINSTD generator */
    u.int_value = 0x00000000; printFloatValue(u.f_value);
    u.int_value = 0x80000000; printFloatValue(u.f_value);
    u.int_value = 0x7fffffff; printFloatValue(u.f_value);
    u.int_value = 0xffffffff; printFloatValue(u.f_value);

    uint32_t a = 1;
    for(int num_tested = 0; num_tested < 1000000; num_tested++)
    {
        /* MINSTD pseudo-random number generator */
        a = (uint32_t)(((uint64_t)a * 48271u) % 2147483647u);

        /* MINSTD does not set the highest bit; test both possibilities */
        u.int_value = a;              printFloatValue(u.f_value);
        u.int_value = a | 0x80000000; printFloatValue(u.f_value);
    }
#endif
}

// ===================== THESE TEST WILL RUN IF YOUR CONFIG INCLUDES DOUBLE SUPPORT ==================

void testDoublesWithinDelta(void)
{
#ifdef UNITY_EXCLUDE_DOUBLE
    TEST_IGNORE();
#else
    TEST_ASSERT_DOUBLE_WITHIN(0.00003, 187245.03485, 187245.03488);
    TEST_ASSERT_DOUBLE_WITHIN(1.0, 187245.0, 187246.0);
    TEST_ASSERT_DOUBLE_WITHIN(0.05, 9273.2549, 9273.2049);
    TEST_ASSERT_DOUBLE_WITHIN(0.007, -726.93725, -726.94424);
#endif
}

void testDoublesNotWithinDelta(void)
{
#ifdef UNITY_EXCLUDE_DOUBLE
    TEST_IGNORE();
#else
    EXPECT_ABORT_BEGIN
    TEST_ASSERT_DOUBLE_WITHIN(0.05, 9273.2649, 9273.2049);
    VERIFY_FAILS_END
#endif
}


void testDoublesEqual(void)
{
#ifdef UNITY_EXCLUDE_DOUBLE
    TEST_IGNORE();
#else
    TEST_ASSERT_EQUAL_DOUBLE(187245123456.0, 187245123456.0);
    TEST_ASSERT_EQUAL_DOUBLE(187241234567.5, 187241234567.6);
    TEST_ASSERT_EQUAL_DOUBLE(9273.2512345649, 9273.25123455699);
    TEST_ASSERT_EQUAL_DOUBLE(-726.12345693724, -726.1234569374);
#endif
}

void testDoublesNotEqual(void)
{
#ifdef UNITY_EXCLUDE_DOUBLE
    TEST_IGNORE();
#else
    EXPECT_ABORT_BEGIN
    TEST_ASSERT_EQUAL_DOUBLE(9273.9649, 9273.0049);
    VERIFY_FAILS_END
#endif
}

void testDoublesNotEqualNegative1(void)
{
#ifdef UNITY_EXCLUDE_DOUBLE
    TEST_IGNORE();
#else
    EXPECT_ABORT_BEGIN
    TEST_ASSERT_EQUAL_DOUBLE(-9273.9649, -9273.0049);
    VERIFY_FAILS_END
#endif
}

void testDoublesNotEqualNegative2(void)
{
#ifdef UNITY_EXCLUDE_DOUBLE
    TEST_IGNORE();
#else
    EXPECT_ABORT_BEGIN
    TEST_ASSERT_EQUAL_DOUBLE(-9273.0049, -9273.9649);
    VERIFY_FAILS_END
#endif
}

void testDoublesNotEqualActualNaN(void)
{
#ifdef UNITY_EXCLUDE_DOUBLE
    TEST_IGNORE();
#else
    EXPECT_ABORT_BEGIN
    TEST_ASSERT_EQUAL_DOUBLE(85.963, 0.0 / d_zero);
    VERIFY_FAILS_END
#endif
}

void testDoublesNotEqualExpectedNaN(void)
{
#ifdef UNITY_EXCLUDE_DOUBLE
    TEST_IGNORE();
#else
    EXPECT_ABORT_BEGIN
    TEST_ASSERT_EQUAL_DOUBLE(0.0 / d_zero, 85.963);
    VERIFY_FAILS_END
#endif
}

void testDoublesEqualBothNaN(void)
{
#ifdef UNITY_EXCLUDE_DOUBLE
    TEST_IGNORE();
#else
    TEST_ASSERT_EQUAL_DOUBLE(0.0 / d_zero, 0.0 / d_zero);
#endif
}

void testDoublesNotEqualInfNaN(void)
{
#ifdef UNITY_EXCLUDE_DOUBLE
    TEST_IGNORE();
#else
    EXPECT_ABORT_BEGIN
    TEST_ASSERT_EQUAL_DOUBLE(1.0 / d_zero, 0.0 / d_zero);
    VERIFY_FAILS_END
#endif
}

void testDoublesNotEqualNaNInf(void)
{
#ifdef UNITY_EXCLUDE_DOUBLE
    TEST_IGNORE();
#else
    EXPECT_ABORT_BEGIN
    TEST_ASSERT_EQUAL_DOUBLE(0.0 / d_zero, 1.0 / d_zero);
    VERIFY_FAILS_END
#endif
}

void testDoublesNotEqualActualInf(void)
{
#ifdef UNITY_EXCLUDE_DOUBLE
    TEST_IGNORE();
#else
    EXPECT_ABORT_BEGIN
    TEST_ASSERT_EQUAL_DOUBLE(321.642, 1.0 / d_zero);
    VERIFY_FAILS_END
#endif
}

void testDoublesNotEqualExpectedInf(void)
{
#ifdef UNITY_EXCLUDE_DOUBLE
    TEST_IGNORE();
#else
    EXPECT_ABORT_BEGIN
    TEST_ASSERT_EQUAL_DOUBLE(1.0 / d_zero, 321.642);
    VERIFY_FAILS_END
#endif
}

void testDoublesEqualBothInf(void)
{
#ifdef UNITY_EXCLUDE_DOUBLE
    TEST_IGNORE();
#else
    TEST_ASSERT_EQUAL_DOUBLE(1.0 / d_zero, 1.0 / d_zero);
#endif
}

void testDoublesNotEqualPlusMinusInf(void)
{
#ifdef UNITY_EXCLUDE_DOUBLE
    TEST_IGNORE();
#else
    EXPECT_ABORT_BEGIN
    TEST_ASSERT_EQUAL_DOUBLE(1.0 / d_zero, -1.0 / d_zero);
    VERIFY_FAILS_END
#endif
}

void testDoubleIsPosInf1(void)
{
#ifdef UNITY_EXCLUDE_DOUBLE
    TEST_IGNORE();
#else
    TEST_ASSERT_DOUBLE_IS_INF(2.0 / d_zero);
#endif
}

void testDoubleIsPosInf2(void)
{
#ifdef UNITY_EXCLUDE_DOUBLE
    TEST_IGNORE();
#else
    EXPECT_ABORT_BEGIN
    TEST_ASSERT_DOUBLE_IS_NOT_INF(2.0 / d_zero);
    VERIFY_FAILS_END
#endif
}

void testDoubleIsNegInf1(void)
{
#ifdef UNITY_EXCLUDE_DOUBLE
    TEST_IGNORE();
#else
    TEST_ASSERT_DOUBLE_IS_NEG_INF(-3.0 / d_zero);
#endif
}

void testDoubleIsNegInf2(void)
{
#ifdef UNITY_EXCLUDE_DOUBLE
    TEST_IGNORE();
#else
    EXPECT_ABORT_BEGIN
    TEST_ASSERT_DOUBLE_IS_NOT_NEG_INF(-3.0 / d_zero);
    VERIFY_FAILS_END
#endif
}

void testDoubleIsNotPosInf1(void)
{
#ifdef UNITY_EXCLUDE_DOUBLE
    TEST_IGNORE();
#else
    EXPECT_ABORT_BEGIN
    TEST_ASSERT_DOUBLE_IS_INF(2.0);
    VERIFY_FAILS_END
#endif
}

void testDoubleIsNotPosInf2(void)
{
#ifdef UNITY_EXCLUDE_DOUBLE
    TEST_IGNORE();
#else
    TEST_ASSERT_DOUBLE_IS_NOT_INF(2.0);
#endif
}

void testDoubleIsNotNegInf(void)
{
#ifdef UNITY_EXCLUDE_DOUBLE
    TEST_IGNORE();
#else
    EXPECT_ABORT_BEGIN
    TEST_ASSERT_DOUBLE_IS_NEG_INF(-999.876);
    VERIFY_FAILS_END
#endif
}

void testDoubleIsNan1(void)
{
#ifdef UNITY_EXCLUDE_DOUBLE
    TEST_IGNORE();
#else
    TEST_ASSERT_DOUBLE_IS_NAN(0.0 / d_zero);
#endif
}

void testDoubleIsNan2(void)
{
#ifdef UNITY_EXCLUDE_DOUBLE
    TEST_IGNORE();
#else
    EXPECT_ABORT_BEGIN
    TEST_ASSERT_DOUBLE_IS_NOT_NAN(0.0 / d_zero);
    VERIFY_FAILS_END
#endif
}

void testDoubleIsNotNan1(void)
{
#ifdef UNITY_EXCLUDE_DOUBLE
    TEST_IGNORE();
#else
    EXPECT_ABORT_BEGIN
    TEST_ASSERT_DOUBLE_IS_NAN(234.9);
    VERIFY_FAILS_END
#endif
}

void testDoubleIsNotNan2(void)
{
#ifdef UNITY_EXCLUDE_DOUBLE
    TEST_IGNORE();
#else
    TEST_ASSERT_DOUBLE_IS_NOT_NAN(234.9);
#endif
}

void testDoubleInfIsNotNan(void)
{
#ifdef UNITY_EXCLUDE_DOUBLE
    TEST_IGNORE();
#else
    EXPECT_ABORT_BEGIN
    TEST_ASSERT_DOUBLE_IS_NAN(1.0 / d_zero);
    VERIFY_FAILS_END
#endif
}

void testDoubleNanIsNotInf(void)
{
#ifdef UNITY_EXCLUDE_DOUBLE
    TEST_IGNORE();
#else
    EXPECT_ABORT_BEGIN
    TEST_ASSERT_DOUBLE_IS_INF(0.0 / d_zero);
    VERIFY_FAILS_END
#endif
}

void testDoubleIsDeterminate1(void)
{
#ifdef UNITY_EXCLUDE_DOUBLE
    TEST_IGNORE();
#else
    TEST_ASSERT_DOUBLE_IS_DETERMINATE(0.0);
    TEST_ASSERT_DOUBLE_IS_DETERMINATE(123.3);
    TEST_ASSERT_DOUBLE_IS_DETERMINATE(-88.3);
#endif
}

void testDoubleIsDeterminate2(void)
{
#ifdef UNITY_EXCLUDE_DOUBLE
    TEST_IGNORE();
#else
    EXPECT_ABORT_BEGIN
    TEST_ASSERT_DOUBLE_IS_NOT_DETERMINATE(-88.3);
    VERIFY_FAILS_END
#endif
}

void testDoubleIsNotDeterminate1(void)
{
#ifdef UNITY_EXCLUDE_DOUBLE
    TEST_IGNORE();
#else
    TEST_ASSERT_DOUBLE_IS_NOT_DETERMINATE(1.0 / d_zero);
    TEST_ASSERT_DOUBLE_IS_NOT_DETERMINATE(-1.0 / d_zero);
    TEST_ASSERT_DOUBLE_IS_NOT_DETERMINATE(0.0 / d_zero);
#endif
}

void testDoubleIsNotDeterminate2(void)
{
#ifdef UNITY_EXCLUDE_DOUBLE
    TEST_IGNORE();
#else
    EXPECT_ABORT_BEGIN
    TEST_ASSERT_DOUBLE_IS_DETERMINATE(-1.0 / d_zero);
    VERIFY_FAILS_END
#endif
}

void testDoubleTraitFailsOnInvalidTrait(void)
{
#ifdef UNITY_EXCLUDE_DOUBLE
    TEST_IGNORE();
#else
    EXPECT_ABORT_BEGIN
    UnityAssertDoubleSpecial(1.0, NULL, __LINE__, UNITY_FLOAT_INVALID_TRAIT);
    VERIFY_FAILS_END
#endif
}

void testEqualDoubleArrays(void)
{
#ifdef UNITY_EXCLUDE_DOUBLE
    TEST_IGNORE();
#else
    double p0[] = {1.0, -8.0,  25.4, -0.123};
    double p1[] = {1.0, -8.0,  25.4, -0.123};
    double p2[] = {1.0, -8.0,  25.4, -0.2};
    double p3[] = {1.0, -23.0, 25.0, -0.26};

    TEST_ASSERT_EQUAL_DOUBLE_ARRAY(p0, p0, 1);
    TEST_ASSERT_EQUAL_DOUBLE_ARRAY(p0, p0, 4);
    TEST_ASSERT_EQUAL_DOUBLE_ARRAY(p0, p1, 4);
    TEST_ASSERT_EQUAL_DOUBLE_ARRAY(p0, p2, 3);
    TEST_ASSERT_EQUAL_DOUBLE_ARRAY(p0, p3, 1);
    TEST_ASSERT_EQUAL_DOUBLE_ARRAY(NULL, NULL, 1);
#endif
}

void testNotEqualDoubleArraysExpectedNull(void)
{
#ifdef UNITY_EXCLUDE_DOUBLE
    TEST_IGNORE();
#else
    double* p0 = NULL;
    double p1[] = {1.0, 8.0, 25.4, 0.252};

    EXPECT_ABORT_BEGIN
    TEST_ASSERT_EQUAL_DOUBLE_ARRAY(p0, p1, 4);
    VERIFY_FAILS_END
#endif
}

void testNotEqualDoubleArraysActualNull(void)
{
#ifdef UNITY_EXCLUDE_DOUBLE
    TEST_IGNORE();
#else
    double p0[] = {1.0, 8.0, 25.4, 0.253};
    double* p1 = NULL;

    EXPECT_ABORT_BEGIN
    TEST_ASSERT_EQUAL_DOUBLE_ARRAY(p0, p1, 4);
    VERIFY_FAILS_END
#endif
}

void testNotEqualDoubleArrays1(void)
{
#ifdef UNITY_EXCLUDE_DOUBLE
    TEST_IGNORE();
#else
    double p0[] = {1.0, 8.0, 25.4, 0.25666666667};
    double p1[] = {1.0, 8.0, 25.4, 0.25666666666};

    EXPECT_ABORT_BEGIN
    TEST_ASSERT_EQUAL_DOUBLE_ARRAY(p0, p1, 4);
    VERIFY_FAILS_END
#endif
}

void testNotEqualDoubleArrays2(void)
{
#ifdef UNITY_EXCLUDE_DOUBLE
    TEST_IGNORE();
#else
    double p0[] = {1.0, 8.0, 25.4, 0.253};
    double p1[] = {2.0, 8.0, 25.4, 0.253};

    EXPECT_ABORT_BEGIN
    TEST_ASSERT_EQUAL_DOUBLE_ARRAY(p0, p1, 4);
    VERIFY_FAILS_END
#endif
}

void testNotEqualDoubleArrays3(void)
{
#ifdef UNITY_EXCLUDE_DOUBLE
    TEST_IGNORE();
#else
    double p0[] = {1.0, 8.0, 25.4, 0.253};
    double p1[] = {1.0, 8.0, 25.5, 0.253};

    EXPECT_ABORT_BEGIN
    TEST_ASSERT_EQUAL_DOUBLE_ARRAY(p0, p1, 4);
    VERIFY_FAILS_END
#endif
}

void testNotEqualDoubleArraysNegative1(void)
{
#ifdef UNITY_EXCLUDE_DOUBLE
    TEST_IGNORE();
#else
    double p0[] = {-1.0, -8.0, -25.4, -0.2566666667};
    double p1[] = {-1.0, -8.0, -25.4, -0.2566666666};

    EXPECT_ABORT_BEGIN
    TEST_ASSERT_EQUAL_DOUBLE_ARRAY(p0, p1, 4);
    VERIFY_FAILS_END
#endif
}

void testNotEqualDoubleArraysNegative2(void)
{
#ifdef UNITY_EXCLUDE_DOUBLE
    TEST_IGNORE();
#else
    double p0[] = {-1.0, -8.0, -25.4, -0.253};
    double p1[] = {-2.0, -8.0, -25.4, -0.253};

    EXPECT_ABORT_BEGIN
    TEST_ASSERT_EQUAL_DOUBLE_ARRAY(p0, p1, 4);
    VERIFY_FAILS_END
#endif
}

void testNotEqualDoubleArraysNegative3(void)
{
#ifdef UNITY_EXCLUDE_DOUBLE
    TEST_IGNORE();
#else
    double p0[] = {-1.0, -8.0, -25.4, -0.253};
    double p1[] = {-1.0, -8.0, -25.5, -0.253};

    EXPECT_ABORT_BEGIN
    TEST_ASSERT_EQUAL_DOUBLE_ARRAY(p0, p1, 4);
    VERIFY_FAILS_END
#endif
}

void testEqualDoubleArraysNaN(void)
{
#ifdef UNITY_EXCLUDE_DOUBLE
    TEST_IGNORE();
#else
    double p0[] = {1.0, 0.0 / d_zero, 25.4, 0.253};
    double p1[] = {1.0, 0.0 / d_zero, 25.4, 0.253};

    TEST_ASSERT_EQUAL_DOUBLE_ARRAY(p0, p1, 4);
#endif
}

void testEqualDoubleArraysInf(void)
{
#ifdef UNITY_EXCLUDE_DOUBLE
    TEST_IGNORE();
#else
    double p0[] = {1.0, 1.0 / d_zero, 25.4, 0.253};
    double p1[] = {1.0, 1.0 / d_zero, 25.4, 0.253};

    TEST_ASSERT_EQUAL_DOUBLE_ARRAY(p0, p1, 4);
#endif
}

void testNotEqualDoubleArraysLengthZero(void)
{
#ifdef UNITY_EXCLUDE_DOUBLE
    TEST_IGNORE();
#else
    double p0[1] = {0.0};
    double p1[1] = {0.0};

    EXPECT_ABORT_BEGIN
    TEST_ASSERT_EQUAL_DOUBLE_ARRAY(p0, p1, 0);
    VERIFY_FAILS_END
#endif
}

void testEqualDoubleEachEqual(void)
{
#ifdef UNITY_EXCLUDE_DOUBLE
    TEST_IGNORE();
#else
    double p0[] = {1.0, 1.0, 1.0, 1.0};
    double p1[] = {-0.123, -0.123, -0.123, -0.123};
    double p2[] = {25.4, 25.4, 25.4, -0.2};
    double p3[] = {1.0, -23.0, 25.0, -0.26};

    TEST_ASSERT_EACH_EQUAL_DOUBLE(1.0, p0, 1);
    TEST_ASSERT_EACH_EQUAL_DOUBLE(1.0, p0, 4);
    TEST_ASSERT_EACH_EQUAL_DOUBLE(-0.123, p1, 4);
    TEST_ASSERT_EACH_EQUAL_DOUBLE(25.4, p2, 3);
    TEST_ASSERT_EACH_EQUAL_DOUBLE(1.0, p3, 1);
#endif
}

void testNotEqualDoubleEachEqualActualNull(void)
{
#ifdef UNITY_EXCLUDE_DOUBLE
    TEST_IGNORE();
#else
    double* p0 = NULL;

    EXPECT_ABORT_BEGIN
    TEST_ASSERT_EACH_EQUAL_DOUBLE(5, p0, 4);
    VERIFY_FAILS_END
#endif
}

void testNotEqualDoubleEachEqual1(void)
{
#ifdef UNITY_EXCLUDE_DOUBLE
    TEST_IGNORE();
#else
    double p0[] = {0.253, 8.0, 0.253, 0.253};

    EXPECT_ABORT_BEGIN
    TEST_ASSERT_EACH_EQUAL_DOUBLE(0.253, p0, 4);
    VERIFY_FAILS_END
#endif
}

void testNotEqualDoubleEachEqual2(void)
{
#ifdef UNITY_EXCLUDE_DOUBLE
    TEST_IGNORE();
#else
    double p0[] = {8.0, 8.0, 8.0, 0.253};

    EXPECT_ABORT_BEGIN
    TEST_ASSERT_EACH_EQUAL_DOUBLE(8.0, p0, 4);
    VERIFY_FAILS_END
#endif
}

void testNotEqualDoubleEachEqual3(void)
{
#ifdef UNITY_EXCLUDE_DOUBLE
    TEST_IGNORE();
#else
    double p0[] = {1.0, 1.0, 1.0, 0.253};

    EXPECT_ABORT_BEGIN
    TEST_ASSERT_EACH_EQUAL_DOUBLE(1.0, p0, 4);
    VERIFY_FAILS_END
#endif
}

void testNotEqualDoubleEachEqualNegative1(void)
{
#ifdef UNITY_EXCLUDE_DOUBLE
    TEST_IGNORE();
#else
    double p0[] = {-1.0, -0.253, -0.253, -0.253};

    EXPECT_ABORT_BEGIN
    TEST_ASSERT_EACH_EQUAL_DOUBLE(-0.253, p0, 4);
    VERIFY_FAILS_END
#endif
}

void testNotEqualDoubleEachEqualNegative2(void)
{
#ifdef UNITY_EXCLUDE_DOUBLE
    TEST_IGNORE();
#else
    double p0[] = {-25.4, -8.0, -25.4, -25.4};

    EXPECT_ABORT_BEGIN
    TEST_ASSERT_EACH_EQUAL_DOUBLE(-25.4, p0, 4);
    VERIFY_FAILS_END
#endif
}

void testNotEqualDoubleEachEqualNegative3(void)
{
#ifdef UNITY_EXCLUDE_DOUBLE
    TEST_IGNORE();
#else
    double p0[] = {-8.0, -8.0, -8.0, -0.253};

    EXPECT_ABORT_BEGIN
    TEST_ASSERT_EACH_EQUAL_DOUBLE(-8.0, p0, 4);
    VERIFY_FAILS_END
#endif
}

void testEqualDoubleEachEqualNaN(void)
{
#ifdef UNITY_EXCLUDE_DOUBLE
    TEST_IGNORE();
#else
    double p0[] = {0.0 / d_zero, 0.0 / d_zero, 0.0 / d_zero, 0.0 / d_zero};

    TEST_ASSERT_EACH_EQUAL_DOUBLE(0.0 / d_zero, p0, 4);
#endif
}

void testEqualDoubleEachEqualInf(void)
{
#ifdef UNITY_EXCLUDE_DOUBLE
    TEST_IGNORE();
#else
    double p0[] = {1.0 / d_zero, 1.0 / d_zero, 25.4, 0.253};

    TEST_ASSERT_EACH_EQUAL_DOUBLE(1.0 / d_zero, p0, 2);
#endif
}

void testNotEqualDoubleEachEqualLengthZero(void)
{
#ifdef UNITY_EXCLUDE_DOUBLE
    TEST_IGNORE();
#else
    double p0[1] = {0.0};

    EXPECT_ABORT_BEGIN
    TEST_ASSERT_EACH_EQUAL_DOUBLE(0.0, p0, 0);
    VERIFY_FAILS_END
#endif
}

void testDoublePrinting(void)
{
#if defined(UNITY_EXCLUDE_FLOAT_PRINT) || defined(UNITY_EXCLUDE_DOUBLE) || !defined(USING_OUTPUT_SPY)
    TEST_IGNORE();
#else
    TEST_ASSERT_EQUAL_PRINT_FLOATING("0.100469",     0.10046949999999999);
    TEST_ASSERT_EQUAL_PRINT_FLOATING("4.29497e+09",  4294967295.999999);
    TEST_ASSERT_EQUAL_PRINT_FLOATING("4.29497e+09",  4294967295.9999995);
    TEST_ASSERT_EQUAL_PRINT_FLOATING("4.29497e+09",  4294967296.0);
    TEST_ASSERT_EQUAL_PRINT_FLOATING("1e+10",        9999999995.0);
    TEST_ASSERT_EQUAL_PRINT_FLOATING("9.0072e+15",   9007199254740990.0);
    TEST_ASSERT_EQUAL_PRINT_FLOATING("7e+100",       7.0e+100);
    TEST_ASSERT_EQUAL_PRINT_FLOATING("3e+200",       3.0e+200);
    TEST_ASSERT_EQUAL_PRINT_FLOATING("9.23457e+300", 9.23456789e+300);

    TEST_ASSERT_EQUAL_PRINT_FLOATING("-0.100469",    -0.10046949999999999);
    TEST_ASSERT_EQUAL_PRINT_FLOATING("-4.29497e+09", -4294967295.999999);
    TEST_ASSERT_EQUAL_PRINT_FLOATING("-4.29497e+09", -4294967295.9999995);
    TEST_ASSERT_EQUAL_PRINT_FLOATING("-7e+100",      -7.0e+100);
#endif
}

void testDoublePrintingInfinityAndNaN(void)
{
#if defined(UNITY_EXCLUDE_FLOAT_PRINT) || defined(UNITY_EXCLUDE_DOUBLE) || !defined(USING_OUTPUT_SPY)
    TEST_IGNORE();
#else
    TEST_ASSERT_EQUAL_PRINT_FLOATING("inf",   1.0 / d_zero);
    TEST_ASSERT_EQUAL_PRINT_FLOATING("-inf", -1.0 / d_zero);

    TEST_ASSERT_EQUAL_PRINT_FLOATING("nan",   0.0 / d_zero);
#endif
}

// ===================== THESE TEST WILL RUN IF YOUR CONFIG INCLUDES DETAIL SUPPORT ==================

void testThatDetailsCanBeHandleOneDetail(void)
{
#ifdef UNITY_EXCLUDE_DETAILS
    TEST_IGNORE();
#else
    UNITY_SET_DETAIL("Detail1");

    EXPECT_ABORT_BEGIN
    TEST_ASSERT_EQUAL_INT_MESSAGE(5, 6, "Should Fail And Say Detail1");
    VERIFY_FAILS_END
#endif
}

void testThatDetailsCanHandleTestFail(void)
{
#ifdef UNITY_EXCLUDE_DETAILS
    TEST_IGNORE();
#else
    UNITY_SET_DETAILS("Detail1","Detail2");

    EXPECT_ABORT_BEGIN
    TEST_FAIL_MESSAGE("Should Fail And Say Detail1 and Detail2");
    VERIFY_FAILS_END
#endif
}

void testThatDetailsCanBeHandleTwoDetails(void)
{
#ifdef UNITY_EXCLUDE_DETAILS
    TEST_IGNORE();
#else
    UNITY_SET_DETAILS("Detail1","Detail2");

    EXPECT_ABORT_BEGIN
    TEST_ASSERT_EQUAL_HEX8_MESSAGE(7, 8, "Should Fail And Say Detail1 and Detail2");
    VERIFY_FAILS_END
#endif
}

void testThatDetailsCanBeHandleSingleDetailClearingTwoDetails(void)
{
#ifdef UNITY_EXCLUDE_DETAILS
    TEST_IGNORE();
#else
    UNITY_SET_DETAILS("Detail1","Detail2");
    UNITY_SET_DETAIL("DetailNew");

    EXPECT_ABORT_BEGIN
    TEST_ASSERT_EQUAL_STRING_MESSAGE("MEH", "GUH", "Should Fail And Say DetailNew");
    VERIFY_FAILS_END
#endif
}
