/*
 * Copyright (c) 2023 Huawei Device Co., Ltd.
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
#ifndef NATIVE_XCOMPONENT_EGL_CORE_H
#define NATIVE_XCOMPONENT_EGL_CORE_H

#include <EGL/egl.h>
#include <EGL/eglext.h>
#include <GLES3/gl3.h>
#include <string>

namespace NativeXComponentSample {
class EGLCore {
public:
    explicit EGLCore() {};
    ~EGLCore() {}
    bool EglContextInit(void* window, int width, int height);
    bool CreateEnvironment();
    void Draw(int& hasDraw);
    void DrawBmp(uint32_t fd, uint32_t off, uint32_t len, int& hasDraw);
    void Background();
    void TRBackground();
    void ChangeColor(int& hasChangeColor);
    void Release();
    void UpdateSize(int width, int height);

    uint32_t fd_;
    uint32_t foff_;
    uint32_t flen_;
private:
    GLuint LoadShader(GLenum type, const char* shaderSrc);
    GLuint CreateProgram(const char* vertexShader, const char* fragShader);
    GLuint TRCreateProgram(const char *vertexShader, const char *fragShader);
    GLint PrepareDraw();
    bool ExecuteDrawBG(GLint position, const GLfloat* color, const GLfloat shapeVertices[], unsigned long vertSize);
    bool ExecuteDrawStar(GLint position, const GLfloat* color, const GLfloat shapeVertices[], unsigned long vertSize);
    bool ExecuteDrawNewStar(GLint position, const GLfloat* color,
                            const GLfloat shapeVertices[], unsigned long vertSize);
    void Rotate2d(GLfloat centerX, GLfloat centerY, GLfloat* rotateX, GLfloat* rotateY, GLfloat theta);
    bool FinishDraw();
    GLuint LoadTexture();
    void CheckCompileErrors(unsigned int shader, std::string type);
    void Display(GLuint texID);

private:
    EGLNativeWindowType eglWindow_;
    EGLDisplay eglDisplay_ = EGL_NO_DISPLAY;
    EGLConfig eglConfig_ = EGL_NO_CONFIG_KHR;
    EGLSurface eglSurface_ = EGL_NO_SURFACE;
    EGLContext eglContext_ = EGL_NO_CONTEXT;
    GLuint program_;
    bool flag_ = false;
    int width_;
    int height_;
    GLfloat widthPercent_;
};
} // namespace NativeXComponentSample
#endif // NATIVE_XCOMPONENT_EGL_CORE_H
