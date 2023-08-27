interface GLFWmonitor {}
interface GLFWwindow {}
interface GLFWcursor {}
interface GLFWvidmode {
	width: number;
	height: number;
	redBits: number;
	greenBits: number;
	blueBits: number;
	refreshRate: number;
}
interface GLFWgammaramp {
	red: number;
	green: number;
	blue: number;
	size: number;
}
interface GLFWimage {
	width: number;
	height: number;
	pixels: string;
}
interface GLFWgamepadstate {
	buttons: string[];
	axes: bigint[];
}

interface GLFWglproc {
	(): void;
}
interface GLFWvkproc {
	(): void;
}
interface GLFWerrorfun {
	(a0: number, a1: string): void;
}
interface GLFWwindowposfun {
	(a0: GLFWwindow, a1: number, a2: number): void;
}
interface GLFWwindowsizefun {
	(a0: GLFWwindow, a1: number, a2: number): void;
}
interface GLFWwindowclosefun {
	(a0: GLFWwindow): void;
}
interface GLFWwindowrefreshfun {
	(a0: GLFWwindow): void;
}
interface GLFWwindowfocusfun {
	(a0: GLFWwindow, a1: number): void;
}
interface GLFWwindowiconifyfun {
	(a0: GLFWwindow, a1: number): void;
}
interface GLFWwindowmaximizefun {
	(a0: GLFWwindow, a1: number): void;
}
interface GLFWframebuffersizefun {
	(a0: GLFWwindow, a1: number, a2: number): void;
}
interface GLFWwindowcontentscalefun {
	(a0: GLFWwindow, a1: bigint, a2: bigint): void;
}
interface GLFWmousebuttonfun {
	(a0: GLFWwindow, a1: number, a2: number, a3: number): void;
}
interface GLFWcursorposfun {
	(a0: GLFWwindow, a1: bigint, a2: bigint): void;
}
interface GLFWcursorenterfun {
	(a0: GLFWwindow, a1: number): void;
}
interface GLFWscrollfun {
	(a0: GLFWwindow, a1: bigint, a2: bigint): void;
}
interface GLFWkeyfun {
	(a0: GLFWwindow, a1: number, a2: number, a3: number, a4: number): void;
}
interface GLFWcharfun {
	(a0: GLFWwindow, a1: number): void;
}
interface GLFWcharmodsfun {
	(a0: GLFWwindow, a1: number, a2: number): void;
}
interface GLFWdropfun {
	(a0: GLFWwindow, a1: number, a2: string): void;
}
interface GLFWmonitorfun {
	(a0: GLFWmonitor, a1: number): void;
}
interface GLFWjoystickfun {
	(a0: number, a1: number): void;
}

export function getMemory(p: any, l: any): any;
export function getAddress(buffer: any): any;

/**
 * This function initializes the GLFW library. Before most GLFW functions can be used, GLFW must be initialized, and before an application terminates GLFW should be terminated in order to free any resources allocated during or after initialization.
 *
 * If this function fails, it calls {@link glfwTerminate} before returning. If it succeeds, you should call {@link glfwTerminate} before the application exits.
 *
 *  Additional calls to this function after successful initialization but before termination will return GLFW_TRUE immediately.
 *
 * @returns `GLFW_TRUE` if successful, or `GLFW_FALSE` if an [error](https://www.glfw.org/docs/3.3.2/intro_guide.html#error_handling) occurred.
 * @see [glfwInit](https://www.glfw.org/docs/3.3.2/group__init.html#ga317aac130a235ab08c6db0834907d85e)
 */
export function glfwInit(): number;

/**
 * This function destroys all remaining windows and cursors, restores any modified gamma ramps and frees any other allocated resources. Once this function is called, you must again call {@link glfwInit} successfully before you will be able to use most GLFW functions.
 *
 * If GLFW has been successfully initialized, this function should be called before the application exits. If initialization fails, there is no need to call this function, as it is called by {@link glfwInit} before it returns failure.
 *
 * This function has no effect if GLFW is not initialized.
 *
 * @see [glfwTerminate](https://www.glfw.org/docs/3.3.2/group__init.html#gaaae48c0a18607ea4a4ba951d939f0901)
 */
export function glfwTerminate(): void;

/**
 * This function sets hints for the next initialization of GLFW.
 *
 * The values you set hints to are never reset by GLFW, but they only take effect during initialization. Once GLFW has been initialized, any values you set will be ignored until the library is terminated and initialized again.
 *
 * Some hints are platform specific. These may be set on any platform but they will only affect their specific platform. Other platforms will ignore them. Setting these hints requires no platform specific headers or functions.
 *
 * @param hint The [init hint](https://www.glfw.org/docs/3.3.2/intro_guide.html#init_hints) to set.
 * @param value The new value of the init hint.
 *
 * @see [glfwInitHint](https://www.glfw.org/docs/3.3.2/group__init.html#ga110fd1d3f0412822b4f1908c026f724a)
 */
export function glfwInitHint(hint: number, value: number): void;

/**
 * This function retrieves the major, minor and revision numbers of the GLFW library. It is intended for when you are using GLFW as a shared library and want to ensure that you are using the minimum required version.
 *
 * Any or all of the version arguments may be `null`.
 *
 * @param major Where to store the major version number, or `null`.
 * @param minor Where to store the minor version number, or `null`.
 * @param rev Where to store the revision number, or `null`.
 *
 * @see [glfwGetVersion](https://www.glfw.org/docs/3.3.2/group__init.html#ga9f8ffaacf3c269cc48eafbf8b9b71197)
 */
export function glfwGetVersion(major: number, minor: number, rev: number): void;

/**
 * This function returns the compile-time generated [version string](https://www.glfw.org/docs/3.3.2/intro_guide.html#intro_version_string) of the GLFW library binary. It describes the version, platform, compiler and any platform-specific compile-time options. It should not be confused with the OpenGL or OpenGL ES version string, queried with `glGetString`.
 *
 * **Do not use the version string** to parse the GLFW library version. The {@link glfwGetVersion} function provides the version of the running library binary in numerical format.
 *
 * @returns The ASCII encoded GLFW version string.
 * @see [glfwGetVersionString](https://www.glfw.org/docs/3.3.2/group__init.html#ga026abd003c8e6501981ab1662062f1c0)
 */
export function glfwGetVersionString(): string;

/**
 * This function returns and clears the [error code](https://www.glfw.org/docs/3.3.2/group__errors.html) of the last error that occurred on the calling thread, and optionally a UTF-8 encoded human-readable description of it. If no error has occurred since the last call, it returns {@link GLFW_NO_ERROR} (zero) and the description pointer is set to `null`.
 *
 * @param description Where to store the error description pointer, or `null`.
 *
 * @returns The last error code for the calling thread, or {@link GLFW_NO_ERROR} (zero).
 * @see [glfwGetError](https://www.glfw.org/docs/3.3.2/group__init.html#ga944986b4ec0b928d488141f92982aa18)
 */
export function glfwGetError(description: string): number;

/**
 * This function sets the error callback, which is called with an error code and a human-readable description each time a GLFW error occurs.
 *
 * The error code is set before the callback is called. Calling {@link glfwGetError} from the error callback will return the same value as the error code argument.
 *
 * The error callback is called on the thread where the error occurred. If you are using GLFW from multiple threads, your error callback needs to be written accordingly.
 *
 * Because the description string may have been generated specifically for that error, it is not guaranteed to be valid after the callback has returned. If you wish to use it after the callback returns, you need to make a copy.
 *
 * Once set, the error callback remains set even after the library has been terminated.
 *
 * @param callback The new callback, or `null` to remove the currently set callback.
 *
 * @returns The previously set callback, or `null` if no callback was set.
 * @see [glfwSetErrorCallback](https://www.glfw.org/docs/3.3.2/group__init.html#gaff45816610d53f0b83656092a4034f40)
 */
export function glfwSetErrorCallback(callback: GLFWerrorfun): GLFWerrorfun;

/**
 * This function returns an array of handles for all currently connected monitors. The primary monitor is always first in the returned array. If no monitors were found, this function returns `null`.
 *
 * @param count Where to store the number of monitors in the returned array. This is set to zero if an error occurred.
 *
 * @returns An array of monitor handles, or `null` if no monitors were found or if an [error](https://www.glfw.org/docs/3.3.2/intro_guide.html#error_handling) occurred.
 * @see [glfwGetMonitors](https://www.glfw.org/docs/3.3.2/group__monitor.html#ga70b1156d5d24e9928f145d6c864369d2)
 */
export function glfwGetMonitors(count: number): GLFWmonitor;

/**
 * This function returns the primary monitor. This is usually the monitor where elements like the task bar or global menu bar are located.
 *
 * @returns The primary monitor, or `null` if no monitors were found or if an error occurred.
 * @see [glfwGetPrimaryMonitor](https://www.glfw.org/docs/3.3.2/group__monitor.html#gac3adb24947eb709e1874028272e5dfc5)
 */
export function glfwGetPrimaryMonitor(): GLFWmonitor;

/**
 * This function returns the position, in screen coordinates, of the upper-left corner of the specified monitor.
 *
 * Any or all of the position arguments may be `null`. If an error occurs, all non-`null` position arguments will be set to zero.
 *
 * @param monitor The monitor to query.
 * @param xpos Where to store the monitor x-coordinate, or `null`.
 * @param ypos Where to store the monitor y-coordinate, or `null`.
 *
 * @see [glfwGetMonitorPos](https://www.glfw.org/docs/3.3.2/group__monitor.html#ga102f54e7acc9149edbcf0997152df8c9)
 */
export function glfwGetMonitorPos(
	monitor: GLFWmonitor,
	xpos: number,
	ypos: number
): void;

/**
 * This function returns the position, in screen coordinates, of the upper-left corner of the work area of the specified monitor along with the work area size in screen coordinates. The work area is defined as the area of the monitor not occluded by the operating system task bar where present. If no task bar exists then the work area is the monitor resolution in screen coordinates.
 *
 * Any or all of the position and size arguments may be `null`. If an error occurs, all non-`null` position and size arguments will be set to zero.
 *
 * @param monitor The monitor to query.
 * @param xpos Where to store the monitor x-coordinate, or `null`.
 * @param ypos Where to store the monitor y-coordinate, or `null`.
 * @param width Where to store the monitor width, or `null`.
 * @param height Where to store the monitor height, or `null`.
 *
 * @see [glfwGetMonitorWorkarea](https://www.glfw.org/docs/3.3.2/group__monitor.html#ga7387a3bdb64bfe8ebf2b9e54f5b6c9d0)
 */
export function glfwGetMonitorWorkarea(
	monitor: GLFWmonitor,
	xpos: number,
	ypos: number,
	width: number,
	height: number
): void;

/**
 * This function returns the size, in millimetres, of the display area of the specified monitor.
 *
 * Some systems do not provide accurate monitor size information, either because the monitor [EDID](https://en.wikipedia.org/wiki/Extended_display_identification_data) data is incorrect or because the driver does not report it accurately.
 *
 * Any or all of the size arguments may be `null`. If an error occurs, all non-`null` size arguments will be set to zero.
 *
 * @param monitor The monitor to query.
 * @param widthMM Where to store the width, in millimetres, of the monitor's display area, or `null`.
 * @param heightMM Where to store the height, in millimetres, of the monitor's display area, or `null`.
 *
 * @see [glfwGetMonitorPhysicalSize](https://www.glfw.org/docs/3.3.2/group__monitor.html#ga7d8bffc6c55539286a6bd20d32a8d7ea)
 */
export function glfwGetMonitorPhysicalSize(
	monitor: GLFWmonitor,
	widthMM: number,
	heightMM: number
): void;

/**
 * This function retrieves the content scale for the specified monitor.
 *
 * The content scale is the ratio between the current DPI and the platform's default DPI. This is especially important for text and any UI elements. If the pixel dimensions of your UI scaled by this look appropriate on your machine then it should appear at a reasonable size on other machines regardless of their DPI and scaling settings. This relies on the system DPI and scaling settings being somewhat correct.
 *
 * The content scale may depend on both the monitor resolution and pixel density and on user settings. It may be very different from the raw DPI calculated from the physical size and current resolution.
 *
 * Any or all of the scale arguments may be `null`. If an error occurs, all non-`null` scale arguments will be set to zero.
 *
 * @param monitor The monitor to query.
 * @param xscale Where to store the x-axis content scale, or `null`.
 * @param yscale Where to store the y-axis content scale, or `null`.
 *
 * @see [glfwGetMonitorContentScale](https://www.glfw.org/docs/3.3.2/group__monitor.html#gad3152e84465fa620b601265ebfcdb21b)
 */
export function glfwGetMonitorContentScale(
	monitor: GLFWmonitor,
	xscale: bigint,
	yscale: bigint
): void;

/**
 * This function retrieves the human-readable name of the specified monitor.
 *
 * This function may be called from any thread. Access is not synchronized.
 *
 * @param monitor The monitor to query.
 *
 * @returns The UTF-8 encoded name of the monitor, or `null` if an error occurred.
 * @see [glfwGetMonitorName](https://www.glfw.org/docs/3.3.2/group__monitor.html#ga7af83e13489d90379588fb331b9e4b68)
 */
export function glfwGetMonitorName(monitor: GLFWmonitor): string;

/**
 * This function sets the user pointer of the specified monitor.
 *
 * The user pointer is a pointer that can be set per monitor and used for various purposes, such as associating application-specific data with the monitor. The user pointer is not used by GLFW in any way.
 *
 * This function may be called from any thread. Access is not synchronized.
 *
 * @param monitor The monitor whose pointer to set.
 * @param pointer The new value of the user pointer.
 *
 * @see [glfwSetMonitorUserPointer](https://www.glfw.org/docs/3.3.2/group__monitor.html#ga702750e24313a686d3637297b6e85fda)
 */
export function glfwSetMonitorUserPointer(
	monitor: GLFWmonitor,
	pointer: void
): void;

/**
 * This function returns the user pointer of the specified monitor.
 *
 * This function may be called from any thread. Access is not synchronized.
 *
 * @param monitor The monitor whose pointer to return.
 *
 * @returns The user pointer of the monitor, or `null` if the monitor is invalid or an error occurred.
 * @see [glfwGetMonitorUserPointer](https://www.glfw.org/docs/3.3.2/group__monitor.html#ga1adbfbfb8cd58b23cfee82e574fbbdc5)
 */
export function glfwGetMonitorUserPointer(monitor: GLFWmonitor): void;

/**
 * This function sets the monitor configuration callback, or removes the currently set callback.
 *
 * This function allows you to set a callback that will be called when a monitor is connected to or disconnected from the system. On some systems, only changes to the primary monitor (the one with the taskbar) will trigger this callback.
 *
 * This function may be called from any thread. Access is not synchronized.
 *
 * @param cbfun The new monitor configuration callback, or `null` to remove the currently set callback.
 *
 * @returns The previously set monitor configuration callback, or `null` if no callback was set or an error occurred.
 * @see [glfwSetMonitorCallback](https://www.glfw.org/docs/3.3.2/group__monitor.html#gab39df645587c8518192aa746c2fb06c3)
 */
export function glfwSetMonitorCallback(
	callback: GLFWmonitorfun
): GLFWmonitorfun;

/**
 * This function returns the current video mode of the specified monitor.
 *
 * @param monitor The monitor to query.
 *
 * @returns The current video mode of the monitor, or `null` if an error occurred.
 * @see [glfwGetVideoMode](https://www.glfw.org/docs/3.3.2/group__monitor.html#gaba376fa7e76634b4788bddc505d6c9d5)
 */
export function glfwGetVideoMode(monitor: GLFWmonitor): GLFWvidmode;

/**
 * This function generates a list of all video modes supported by the specified monitor.
 *
 * The returned array is sorted in ascending order, first by color bit depth (the sum of all channel depths) and then by resolution area (the product of width and height).
 *
 * The returned array is allocated and freed by GLFW. You should not free it yourself. It is guaranteed to be valid until the monitor is disconnected, the monitor mode is changed or the library is terminated.
 *
 * @param monitor The monitor to query.
 * @param count Where to store the number of video modes in the returned array. This is set to zero if an error occurred.
 *
 * @returns An array of video modes, or `null` if an error occurred.
 * @see [glfwGetVideoModes](https://www.glfw.org/docs/3.3.2/group__monitor.html#gad2e24d2843cb7d6c26202cddd530fc1b)
 */
export function glfwGetVideoModes(
	monitor: GLFWmonitor,
	count: number
): GLFWvidmode[];

/**
 * This function sets the gamma correction of the specified monitor.
 *
 * @param monitor The monitor whose gamma to set.
 * @param gamma The desired gamma correction.
 *
 * @see [glfwSetGamma](https://www.glfw.org/docs/3.3.2/group__monitor.html#ga6ac582625c990220785ddd34efa3169a)
 */
export function glfwSetGamma(monitor: GLFWmonitor, gamma: bigint): void;

/**
 * This function returns the original gamma ramp for the specified monitor.
 *
 * @param monitor The monitor to query.
 *
 * @returns The original gamma ramp, or `null` if an error occurred.
 * @see [glfwGetGammaRamp](https://www.glfw.org/docs/3.3.2/group__monitor.html#ga76ba90debcf0062b5c4b73052b24f96f)
 */
export function glfwGetGammaRamp(monitor: GLFWmonitor): GLFWgammaramp;

/**
 * This function sets the current gamma ramp for the specified monitor.
 *
 * @param monitor The monitor whose gamma ramp to set.
 * @param ramp The gamma ramp to use.
 *
 * @see [glfwSetGammaRamp](https://www.glfw.org/docs/3.3.2/group__monitor.html#ga583f0ffd0d29613d8cd172b996bbf0dd)
 */
export function glfwSetGammaRamp(
	monitor: GLFWmonitor,
	ramp: GLFWgammaramp
): void;

/**
 * This function resets all window hints to their default values.
 *
 * @see [glfwDefaultWindowHints](https://www.glfw.org/docs/3.3.2/group__window.html#gaa77c4898dfb83344a6b4f76aa16b9a4a)
 */
export function glfwDefaultWindowHints(): void;

/**
 * This function sets the specified window hint to the desired value.
 *
 * @param hint The window hint to set.
 * @param value The new value of the window hint.
 *
 * @see [glfwWindowHint](https://www.glfw.org/docs/3.3.2/group__window.html#ga7d9c8c62384b1e2821c4dc48952d2033)
 */
export function glfwWindowHint(hint: number, value: number): void;

/**
 * This function sets hints for the next call to {@link glfwCreateWindow}. The hints, once set, retain their values until changed by a call to this function or {@link glfwDefaultWindowHints}, or until the library is terminated.
 *
 * Only string type hints can be set with this function. Integer value hints are set with {@link glfwWindowHint}.
 *
 * This function does not check whether the specified hint values are valid. If you set hints to invalid values this will instead be reported by the next call to {@link glfwCreateWindow}.
 *
 * Some hints are platform specific. These may be set on any platform but they will only affect their specific platform. Other platforms will ignore them. Setting these hints requires no platform specific headers or functions.
 *
 * @param hint The [window hint](https://www.glfw.org/docs/3.3.2/window_guide.html#window_hints) to set.
 * @param value The new value of the window hint.
 *
 * @see [glfwWindowHintString](https://www.glfw.org/docs/3.3.2/group__window.html#ga8cb2782861c9d997bcf2dea97f363e5f)
 */
export function glfwWindowHintString(hint: number, value: string): void;

/**
 * This function creates a window and its associated OpenGL or OpenGL ES context. Most of the options controlling how the window and its context should be created are specified with [window hints](https://www.glfw.org/docs/3.3.2/window_guide.html#window_hints).
 *
 * Successful creation does not change which context is current. Before you can use the newly created context, you need to [make it current](https://www.glfw.org/docs/3.3.2/context_guide.html#context_current). For information about the share parameter, see [Context object sharing](https://www.glfw.org/docs/3.3.2/context_guide.html#context_sharing).
 *
 * The created window, framebuffer and context may differ from what you requested, as not all parameters and hints are [hard constraints](https://www.glfw.org/docs/3.3.2/window_guide.html#window_hints_hard). This includes the size of the window, especially for full screen windows. To query the actual attributes of the created window, framebuffer and context, see {@link glfwGetWindowAttrib}, {@link glfwGetWindowSize} and {@link glfwGetFramebufferSize}.
 *
 * To create a full screen window, you need to specify the monitor the window will cover. If no monitor is specified, the window will be windowed mode. Unless you have a way for the user to choose a specific monitor, it is recommended that you pick the primary monitor. For more information on how to query connected monitors, see [Retrieving monitors](https://www.glfw.org/docs/3.3.2/monitor_guide.html#monitor_monitors)
 *
 * For full screen windows, the specified size becomes the resolution of the window's desired video mode. As long as a full screen window is not iconified, the supported video mode most closely matching the desired video mode is set for the specified monitor. For more information about full screen windows, including the creation of so called windowed full screen or borderless full screen windows, see ["Windowed full screen" windows](https://www.glfw.org/docs/3.3.2/window_guide.html#window_windowed_full_screen).
 *
 * Once you have created the window, you can switch it between windowed and full screen mode with {@link glfwSetWindowMonitor}. This will not affect its OpenGL or OpenGL ES context.
 *
 * By default, newly created windows use the placement recommended by the window system. To create the window at a specific position, make it initially invisible using the {@link GLFW_VISIBLE} window hint, set its [position](https://www.glfw.org/docs/3.3.2/window_guide.html#window_pos) and then [show](https://www.glfw.org/docs/3.3.2/window_guide.html#window_hide) it.
 *
 * As long as at least one full screen window is not iconified, the screensaver is prohibited from starting.
 *
 * Window systems put limits on window sizes. Very large or very small window dimensions may be overridden by the window system on creation. Check the actual [size](https://www.glfw.org/docs/3.3.2/window_guide.html#window_size) after creation.
 *
 * The [swap interval](https://www.glfw.org/docs/3.3.2/window_guide.html#buffer_swap) is not set during window creation and the initial value may vary depending on driver settings and defaults.
 *
 * @param width The desired width, in screen coordinates, of the window. This must be greater than zero.
 * @param height The desired height, in screen coordinates, of the window. This must be greater than zero.
 * @param title The initial, UTF-8 encoded window title.
 * @param monitor The monitor to use for full screen mode, or `null` for windowed mode.
 * @param share The window whose context to share resources with, or `null` to not share resources.
 *
 * @returns The handle of the created window, or `null` if an [error](https://www.glfw.org/docs/3.3.2/intro_guide.html#error_handling) occurred.
 * @see [glfwCreateWindow](https://www.glfw.org/docs/3.3.2/group__window.html#ga3555a418df92ad53f917597fe2f64aeb)
 */
export function glfwCreateWindow(
	width: number,
	height: number,
	title: string,
	monitor: GLFWmonitor | null,
	share: GLFWwindow | null
): GLFWwindow;

/**
 * This function destroys the specified window and its context. On calling this function, no further callbacks will be called for that window.
 *
 * If the context of the specified window is current on the main thread, it is detached before being destroyed.
 *
 * @param window The window to destroy.
 *
 * @see [glfwDestroyWindow](https://www.glfw.org/docs/3.3.2/group__window.html#gacdf43e51376051d2c091662e9fe3d7b2)
 */
export function glfwDestroyWindow(window: GLFWwindow): void;

/**
 * This function returns the value of the close flag of the specified window.
 *
 * @param window The window to query.
 *
 * @returns The value of the close flag.
 * @see [glfwWindowShouldClose](https://www.glfw.org/docs/3.3.2/group__window.html#ga24e02fbfefbb81fc45320989f8140ab5)
 */
export function glfwWindowShouldClose(window: GLFWwindow): number;

/**
 * This function sets the value of the close flag of the specified window. This can be used to override the user's attempt to close the window, or to signal that it should be closed.
 *
 * @param window The window whose flag to change.
 * @param value The new value.
 *
 * @see [glfwSetWindowShouldClose](https://www.glfw.org/docs/3.3.2/group__window.html#ga49c449dde2a6f87d996f4daaa09d6708)
 */
export function glfwSetWindowShouldClose(
	window: GLFWwindow,
	value: number
): void;

/**
 * This function sets the window title, encoded as UTF-8, of the specified window.
 *
 * @param window The window whose title to change.
 * @param title The UTF-8 encoded window title.
 *
 * @see [glfwSetWindowTitle](https://www.glfw.org/docs/3.3.2/group__window.html#ga5d877f09e968cef7a360b513306f17ff)
 */
export function glfwSetWindowTitle(window: GLFWwindow, title: string): void;

/**
 * This function sets the icon of the specified window. If passed an array of candidate images, those of or closest to the sizes desired by the system are selected. If no images are specified, the window reverts to its default icon.
 *
 * The pixels are 32-bit, little-endian, non-premultiplied RGBA, i.e. eight bits per channel with the red channel first. They are arranged canonically as packed sequential rows, starting from the top-left corner.
 *
 * The desired image sizes varies depending on platform and system settings. The selected images will be rescaled as needed. Good sizes include 16x16, 32x32 and 48x48.
 *
 * @param window The window whose icon to set.
 * @param count The number of images in the specified array, or zero to revert to the default window icon.
 * @param images The images to create the icon from. This is ignored if count is zero.
 *
 * @see [glfwSetWindowIcon](https://www.glfw.org/docs/3.3.2/group__window.html#gadd7ccd39fe7a7d1f0904666ae5932dc5)
 */
export function glfwSetWindowIcon(
	window: GLFWwindow,
	count: number,
	images: GLFWimage
): void;

/**
 * This function retrieves the position, in screen coordinates, of the upper-left corner of the content area of the specified window.
 *
 * Any or all of the position arguments may be `null`. If an error occurs, all non-`null` position arguments will be set to zero.
 *
 * @param window The window to query.
 * @param xpos Where to store the x-coordinate of the upper-left corner of the content area, or `null`.
 * @param ypos Where to store the y-coordinate of the upper-left corner of the content area, or `null`.
 *
 * @see [glfwGetWindowPos](https://www.glfw.org/docs/3.3.2/group__window.html#ga73cb526c000876fd8ddf571570fdb634)
 */
export function glfwGetWindowPos(
	window: GLFWwindow,
	xpos: number,
	ypos: number
): void;

/**
 * This function sets the position, in screen coordinates, of the upper-left corner of the content area of the specified windowed mode window. If the window is a full screen window, this function does nothing.
 *
 * **Do not use this function** to move an already visible window unless you have very good reasons for doing so, as it will confuse and annoy the user.
 *
 * The window manager may put limits on what positions are allowed. GLFW cannot and should not override these limits.
 *
 * @param window The window to query.
 * @param xpos The x-coordinate of the upper-left corner of the content area.
 * @param ypos The y-coordinate of the upper-left corner of the content area.
 *
 * @see [glfwSetWindowPos](https://www.glfw.org/docs/3.3.2/group__window.html#ga1abb6d690e8c88e0c8cd1751356dbca8)
 */
export function glfwSetWindowPos(
	window: GLFWwindow,
	xpos: number,
	ypos: number
): void;

/**
 * This function retrieves the size, in screen coordinates, of the content area of the specified window. If you wish to retrieve the size of the framebuffer of the window in pixels, see {@link glfwGetFramebufferSize}.
 *
 * Any or all of the size arguments may be `null`. If an error occurs, all non-`null` size arguments will be set to zero.
 *
 * @param window The window whose size to retrieve.
 * @param width Where to store the width, in screen coordinates, of the content area, or `null`.
 * @param height Where to store the height, in screen coordinates, of the content area, or `null`.
 *
 * @see [glfwGetWindowSize](https://www.glfw.org/docs/3.3.2/group__window.html#gaeea7cbc03373a41fb51cfbf9f2a5d4c6)
 */
export function glfwGetWindowSize(
	window: GLFWwindow,
	width: number,
	height: number
): void;

/**
 * This function sets the size limits of the content area of the specified window. If the window is full screen, the size limits only take effect once it is made windowed. If the window is not resizable, this function does nothing.
 *
 * The size limits are applied immediately to a windowed mode window and may cause it to be resized.
 *
 * The maximum dimensions must be greater than or equal to the minimum dimensions and all must be greater than or equal to zero.
 *
 * @param window The window to set limits for.
 * @param minwidth The minimum width, in screen coordinates, of the content area, or {@link GLFW_DONT_CARE}.
 * @param minheight The minimum height, in screen coordinates, of the content area, or {@link GLFW_DONT_CARE}.
 * @param maxwidth The maximum width, in screen coordinates, of the content area, or {@link GLFW_DONT_CARE}.
 * @param maxheight The maximum height, in screen coordinates, of the content area, or {@link GLFW_DONT_CARE}.
 *
 * @see [glfwSetWindowSizeLimits](https://www.glfw.org/docs/3.3.2/group__window.html#gac314fa6cec7d2d307be9963e2709cc90)
 */
export function glfwSetWindowSizeLimits(
	window: GLFWwindow,
	minwidth: number,
	minheight: number,
	maxwidth: number,
	maxheight: number
): void;

/**
 * This function sets the required aspect ratio of the content area of the specified window. If the window is full screen, the aspect ratio only takes effect once it is made windowed. If the window is not resizable, this function does nothing.
 *
 * The aspect ratio is specified as a numerator and a denominator and both values must be greater than zero. For example, the common 16:9 aspect ratio is specified as 16 and 9, respectively.
 *
 * If the numerator and denominator is set to {@link GLFW_DONT_CARE} then the aspect ratio limit is disabled.
 *
 * The aspect ratio is applied immediately to a windowed mode window and may cause it to be resized.
 *
 * @param window The window to set limits for.
 * @param numer The numerator of the desired aspect ratio, or {@link GLFW_DONT_CARE}.
 * @param denom The denominator of the desired aspect ratio, or {@link GLFW_DONT_CARE}.
 *
 * @see [glfwSetWindowAspectRatio](https://www.glfw.org/docs/3.3.2/group__window.html#ga72ac8cb1ee2e312a878b55153d81b937)
 */
export function glfwSetWindowAspectRatio(
	window: GLFWwindow,
	numer: number,
	denom: number
): void;

/**
 * This function sets the size, in screen coordinates, of the content area of the specified window.
 *
 * For full screen windows, this function updates the resolution of its desired video mode and switches to the video mode closest to it, without affecting the window's context. As the context is unaffected, the bit depths of the framebuffer remain unchanged.
 *
 * If you wish to update the refresh rate of the desired video mode in addition to its resolution, see {@link glfwSetWindowMonitor}.
 *
 * The window manager may put limits on what sizes are allowed. GLFW cannot and should not override these limits.
 *
 * @param window The window to resize.
 * @param width The desired width, in screen coordinates, of the window content area.
 * @param height The desired height, in screen coordinates, of the window content area.
 *
 * @see [glfwSetWindowSize](https://www.glfw.org/docs/3.3.2/group__window.html#ga371911f12c74c504dd8d47d832d095cb)
 */
export function glfwSetWindowSize(
	window: GLFWwindow,
	width: number,
	height: number
): void;

/**
 * This function retrieves the size, in pixels, of the framebuffer of the specified window. If you wish to retrieve the size of the window in screen coordinates, see {@link glfwGetWindowSize}.
 *
 * Any or all of the size arguments may be `null`. If an error occurs, all non-`null` size arguments will be set to zero.
 *
 * @param window The window whose framebuffer to query.
 * @param width Where to store the width, in pixels, of the framebuffer, or `null`.
 * @param height Where to store the height, in pixels, of the framebuffer, or `null`.
 *
 * @see [glfwGetFramebufferSize](https://www.glfw.org/docs/3.3.2/group__window.html#ga0e2637a4161afb283f5300c7f94785c9)
 */
export function glfwGetFramebufferSize(
	window: GLFWwindow,
	width: number,
	height: number
): void;

/**
 * This function retrieves the size, in screen coordinates, of each edge of the frame of the specified window. This size includes the title bar, if the window has one. The size of the frame may vary depending on the [window-related hints](https://www.glfw.org/docs/3.3.2/window_guide.html#window_hints_wnd) used to create it.
 *
 * Because this function retrieves the size of each window frame edge and not the offset along a particular coordinate axis, the retrieved values will always be zero or positive.
 *
 * Any or all of the size arguments may be `null`. If an error occurs, all non-`null` size arguments will be set to zero.
 *
 * @param window The window whose frame size to query.
 * @param left Where to store the size, in screen coordinates, of the left edge of the window frame, or `null`.
 * @param top Where to store the size, in screen coordinates, of the top edge of the window frame, or `null`.
 * @param right Where to store the size, in screen coordinates, of the right edge of the window frame, or `null`.
 * @param bottom Where to store the size, in screen coordinates, of the bottom edge of the window frame, or `null`.
 *
 * @see [glfwGetWindowFrameSize](https://www.glfw.org/docs/3.3.2/group__window.html#ga1a9fd382058c53101b21cf211898f1f1)
 */
export function glfwGetWindowFrameSize(
	window: GLFWwindow,
	left: number,
	top: number,
	right: number,
	bottom: number
): void;

/**
 * This function retrieves the content scale for the specified window. The content scale is the ratio between the current DPI and the platform's default DPI. This is especially important for text and any UI elements. If the pixel dimensions of your UI scaled by this look appropriate on your machine then it should appear at a reasonable size on other machines regardless of their DPI and scaling settings. This relies on the system DPI and scaling settings being somewhat correct.
 *
 * On systems where each monitors can have its own content scale, the window content scale will depend on which monitor the system considers the window to be on.
 *
 * @param window The window to query.
 * @param xscale Where to store the x-axis content scale, or `null`.
 * @param yscale Where to store the y-axis content scale, or `null`.3
 *
 * @see [glfwGetWindowContentScale](https://www.glfw.org/docs/3.3.2/group__window.html#gaf5d31de9c19c4f994facea64d2b3106c)
 */
export function glfwGetWindowContentScale(
	window: GLFWwindow,
	xscale: bigint,
	yscale: bigint
): void;

/**
 * This function returns the opacity of the window, including any decorations.
 *
 * The opacity (or alpha) value is a positive finite number between zero and one, where zero is fully transparent and one is fully opaque. If the system does not support whole window transparency, this function always returns one.
 *
 * The initial opacity value for newly created windows is one.
 *
 * @param window The window to query.
 *
 * @returns The opacity value of the specified window.
 * @see [glfwGetWindowOpacity](https://www.glfw.org/docs/3.3.2/group__window.html#gad09f0bd7a6307c4533b7061828480a84)
 */
export function glfwGetWindowOpacity(window: GLFWwindow): bigint;

/**
 * This function sets the opacity of the window, including any decorations.
 *
 * The opacity (or alpha) value is a positive finite number between zero and one, where zero is fully transparent and one is fully opaque.
 *
 * The initial opacity value for newly created windows is one.
 *
 * A window created with framebuffer transparency may not use whole window transparency. The results of doing this are undefined.
 *
 * @param window The window to set the opacity for.
 * @param opacity The desired opacity of the specified window.
 *
 * @see [glfwSetWindowOpacity](https://www.glfw.org/docs/3.3.2/group__window.html#gac31caeb3d1088831b13d2c8a156802e9)
 */
export function glfwSetWindowOpacity(window: GLFWwindow, opacity: bigint): void;

/**
 * This function iconifies (minimizes) the specified window if it was previously restored. If the window is already iconified, this function does nothing.
 *
 * If the specified window is a full screen window, GLFW restores the original video mode of the monitor. The window's desired video mode is set again when the window is restored.
 *
 * @param window The window to iconify.
 *
 * @see [glfwIconifyWindow](https://www.glfw.org/docs/3.3.2/group__window.html#ga1bb559c0ebaad63c5c05ad2a066779c4)
 */
export function glfwIconifyWindow(window: GLFWwindow): void;

/**
 * This function restores the specified window if it was previously iconified (minimized) or maximized. If the window is already restored, this function does nothing.
 *
 * If the specified window is an iconified full screen window, its desired video mode is set again for its monitor when the window is restored.
 *
 * @param window The window to restore.
 *
 * @see [glfwRestoreWindow](https://www.glfw.org/docs/3.3.2/group__window.html#ga52527a5904b47d802b6b4bb519cdebc7)
 */
export function glfwRestoreWindow(window: GLFWwindow): void;

/**
 * This function maximizes the specified window if it was previously not maximized. If the window is already maximized, this function does nothing.
 *
 * If the specified window is a full screen window, this function does nothing.
 *
 * @param window The window to maximize.
 *
 * @see [glfwMaximizeWindow](https://www.glfw.org/docs/3.3.2/group__window.html#ga3f541387449d911274324ae7f17ec56b)
 */
export function glfwMaximizeWindow(window: GLFWwindow): void;

/**
 * This function makes the specified window visible if it was previously hidden. If the window is already visible or is in full screen mode, this function does nothing.
 *
 * By default, windowed mode windows are focused when shown Set the {@link GLFW_FOCUS_ON_SHOW} window hint to change this behavior for all newly created windows, or change the behavior for an existing window with {@link glfwSetWindowAttrib}.
 *
 * @param window The window to make visible.
 *
 * @see [glfwShowWindow](https://www.glfw.org/docs/3.3.2/group__window.html#ga61be47917b72536a148300f46494fc66)
 */
export function glfwShowWindow(window: GLFWwindow): void;

/**
 * This function hides the specified window if it was previously visible. If the window is already hidden or is in full screen mode, this function does nothing.
 *
 * @param window The window to hide.
 *
 * @see [glfwHideWindow](https://www.glfw.org/docs/3.3.2/group__window.html#ga49401f82a1ba5f15db5590728314d47c)
 */
export function glfwHideWindow(window: GLFWwindow): void;

/**
 * This function brings the specified window to front and sets input focus. The window should already be visible and not iconified.
 *
 * By default, both windowed and full screen mode windows are focused when initially created. Set the {@link GLFW_FOCUSED} to disable this behavior.
 *
 * Also by default, windowed mode windows are focused when shown with {@link glfwShowWindow}. Set the {@link GLFW_FOCUS_ON_SHOW} to disable this behavior.
 *
 * **Do not use this function** to steal focus from other applications unless you are certain that is what the user wants. Focus stealing can be extremely disruptive.
 *
 * For a less disruptive way of getting the user's attention, see [attention requests](https://www.glfw.org/docs/3.3.2/window_guide.html#window_attention).
 *
 * @param window The window to give input focus.
 *
 * @see [glfwFocusWindow](https://www.glfw.org/docs/3.3.2/group__window.html#ga873780357abd3f3a081d71a40aae45a1)
 */
export function glfwFocusWindow(window: GLFWwindow): void;

/**
 * This function requests user attention to the specified window. On platforms where this is not supported, attention is requested to the application as a whole.
 *
 * Once the user has given attention, usually by focusing the window or application, the system will end the request automatically.
 *
 * @param window The window to request attention to.
 *
 * @see [glfwRequestWindowAttention](https://www.glfw.org/docs/3.3.2/group__window.html#ga2f8d59323fc4692c1d54ba08c863a703)
 */
export function glfwRequestWindowAttention(window: GLFWwindow): void;

/**
 * This function returns the handle of the monitor that the specified window is in full screen on.
 *
 * @param window The window to query.
 *
 * @returns The monitor, or NULL if the window is in windowed mode or an [error](https://www.glfw.org/docs/3.3.2/intro_guide.html#error_handling) occurred.
 * @see [glfwGetWindowMonitor](https://www.glfw.org/docs/3.3.2/group__window.html#ga4d766499ac02c60f02221a9dfab87299)
 */
export function glfwGetWindowMonitor(window: GLFWwindow): GLFWmonitor;

/**
 * This function sets the monitor that the window uses for full screen mode or, if the monitor is `NULL`, makes it windowed mode.
 *
 * When setting a monitor, this function updates the width, height and refresh rate of the desired video mode and switches to the video mode closest to it. The window position is ignored when setting a monitor.
 *
 * When the monitor is `NULL`, the position, width and height are used to place the window content area. The refresh rate is ignored when no monitor is specified.
 *
 * If you only wish to update the resolution of a full screen window or the size of a windowed mode window, see {@link glfwSetWindowSize}.
 *
 * When a window transitions from full screen to windowed mode, this function restores any previous window settings such as whether it is decorated, floating, resizable, has size or aspect ratio limits, etc.
 *
 * @param window The window whose monitor, size or video mode to set.
 * @param monitor The desired monitor, or `NULL` to set windowed mode.
 * @param xpos The desired x-coordinate of the upper-left corner of the content area
 * @param ypos The desired y-coordinate of the upper-left corner of the content area.
 * @param width The desired with, in screen coordinates, of the content area or video mode.
 * @param height The desired height, in screen coordinates, of the content area or video mode.
 * @param refreshRate The desired refresh rate, in Hz, of the video mode, or `GLFW_DONT_CARE`.
 *
 * @see [glfwSetWindowMonitor](https://www.glfw.org/docs/3.3.2/group__window.html#ga81c76c418af80a1cce7055bccb0ae0a7)
 */
export function glfwSetWindowMonitor(
	window: GLFWwindow,
	monitor: GLFWmonitor,
	xpos: number,
	ypos: number,
	width: number,
	height: number,
	refreshRate: number
): void;

/**
 * This function returns the value of an attribute of the specified window or its OpenGL or OpenGL ES context.
 *
 * @param window The window to query.
 * @param attrib The [window attribute](https://www.glfw.org/docs/3.3.2/window_guide.html#window_attribs) whose value to return.
 *
 * @returns The value of the attribute, or zero if an [error](https://www.glfw.org/docs/3.3.2/intro_guide.html#error_handling) occurred.
 * @see [glfwGetWindowAttrib](https://www.glfw.org/docs/3.3.2/group__window.html#gacccb29947ea4b16860ebef42c2cb9337)
 */
export function glfwGetWindowAttrib(window: GLFWwindow, attrib: number): number;

/**
 * This function sets the value of an attribute of the specified window.
 *
 * The supported attributes are {@link GLFW_DECORATED}, {@link GLFW_RESIZABLE}, {@link GLFW_FLOATING}, {@link GLFW_AUTO_ICONIFY} and {@link GLFW_FOCUS_ON_SHOW}.
 *
 * Some of these attributes are ignored for full screen windows. The new value will take effect if the window is later made windowed.
 *
 * Some of these attributes are ignored for windowed mode windows. The new value will take effect if the window is later made full screen.
 *
 * @param window The window to set the attribute for.
 * @param attrib A supported window attribute.
 * @param value `GLFW_TRUE` or `GLFW_FALSE`.
 *
 * @see [glfwSetWindowAttrib](https://www.glfw.org/docs/3.3.2/group__window.html#gace2afda29b4116ec012e410a6819033e)
 */
export function glfwSetWindowAttrib(
	window: GLFWwindow,
	attrib: number,
	value: number
): void;

/**
 * This function sets the user-defined pointer of the specified window. The current value is retained until the window is destroyed. The initial value is `NULL`.
 *
 * @param window The window whose pointer to set.
 * @param pointer The new value.
 *
 * @see [glfwSetWindowUserPointer](https://www.glfw.org/docs/3.3.2/group__window.html#ga3d2fc6026e690ab31a13f78bc9fd3651)
 */
export function glfwSetWindowUserPointer(
	window: GLFWwindow,
	pointer: void
): void;

/**
 * This function returns the current value of the user-defined pointer of the specified window. The initial value is `NULL`.
 *
 * @param window The window whose pointer to return.
 *
 * @see [glfwGetWindowUserPointer](https://www.glfw.org/docs/3.3.2/group__window.html#gae77a4add0d2023ca21ff1443ced01653)
 */
export function glfwGetWindowUserPointer(window: GLFWwindow): void;

/**
 * This function sets the position callback of the specified window, which is called when the window is moved. The callback is provided with the position, in screen coordinates, of the upper-left corner of the content area of the window.
 *
 * @param window The window whose callback to set.
 * @param callback The new callback, or `NULL` to remove the currently set callback.
 *
 * @returns The previously set callback, or `NULL` if no callback was set or the library had not been [initialized](https://www.glfw.org/docs/3.3.2/intro_guide.html#intro_init).
 * @see [glfwSetWindowPosCallback](https://www.glfw.org/docs/3.3.2/group__window.html#ga08bdfbba88934f9c4f92fd757979ac74)
 */
export function glfwSetWindowPosCallback(
	window: GLFWwindow,
	callback: GLFWwindowposfun
): GLFWwindowposfun;

/**
 * This function sets the size callback of the specified window, which is called when the window is resized. The callback is provided with the size, in screen coordinates, of the content area of the window.
 *
 * @param window The window whose callback to set.
 * @param callback The new callback, or `NULL` to remove the currently set callback.
 *
 * @returns The previously set callback, or `NULL` if no callback was set or the library had not been [initialized](https://www.glfw.org/docs/3.3.2/intro_guide.html#intro_init).
 * @see [glfwSetWindowSizeCallback](https://www.glfw.org/docs/3.3.2/group__window.html#gad91b8b047a0c4c6033c38853864c34f8)
 */
export function glfwSetWindowSizeCallback(
	window: GLFWwindow,
	callback: GLFWwindowsizefun
): GLFWwindowsizefun;

/**
 * This function sets the close callback of the specified window, which is called when the user attempts to close the window, for example by clicking the close widget in the title bar.
 *
 * The close flag is set before this callback is called, but you can modify it at any time with {@link glfwSetWindowShouldClose}.
 *
 * The close callback is not triggered by {@link glfwDestroyWindow}.
 *
 * @param window The window whose callback to set.
 * @param callback The new callback, or `NULL` to remove the currently set callback.
 *
 * @returns The previously set callback, or `NULL` if no callback was set or the library had not been [initialized](https://www.glfw.org/docs/3.3.2/intro_guide.html#intro_init).
 * @see [glfwSetWindowCloseCallback](https://www.glfw.org/docs/3.3.2/group__window.html#gada646d775a7776a95ac000cfc1885331)
 */
export function glfwSetWindowCloseCallback(
	window: GLFWwindow,
	callback: GLFWwindowclosefun
): GLFWwindowclosefun;

/**
 * This function sets the refresh callback of the specified window, which is called when the content area of the window needs to be redrawn, for example if the window has been exposed after having been covered by another window.
 *
 * On compositing window systems such as Aero, Compiz, Aqua or Wayland, where the window contents are saved off-screen, this callback may be called only very infrequently or never at all.
 *
 * @param window The window whose callback to set.
 * @param callback The new callback, or `NULL` to remove the currently set callback.
 *
 * @returns The previously set callback, or `NULL` if no callback was set or the library had not been [initialized](https://www.glfw.org/docs/3.3.2/intro_guide.html#intro_init).
 * @see [glfwSetWindowRefreshCallback](https://www.glfw.org/docs/3.3.2/group__window.html#ga1c5c7eb889c33c7f4d10dd35b327654e)
 */
export function glfwSetWindowRefreshCallback(
	window: GLFWwindow,
	callback: GLFWwindowrefreshfun
): GLFWwindowrefreshfun;

/**
 * This function sets the focus callback of the specified window, which is called when the window gains or loses input focus.
 *
 * After the focus callback is called for a window that lost input focus, synthetic key and mouse button release events will be generated for all such that had been pressed. For more information, see {@link glfwSetKeyCallback} and {@link glfwSetMouseButtonCallback}.
 *
 * @param window The window whose callback to set.
 * @param callback The new callback, or `NULL` to remove the currently set callback.
 *
 * @returns The previously set callback, or `NULL` if no callback was set or the library had not been [initialized](https://www.glfw.org/docs/3.3.2/intro_guide.html#intro_init).
 * @see [glfwSetWindowFocusCallback](https://www.glfw.org/docs/3.3.2/group__window.html#gac2d83c4a10f071baf841f6730528e66c)
 */
export function glfwSetWindowFocusCallback(
	window: GLFWwindow,
	callback: GLFWwindowfocusfun
): GLFWwindowfocusfun;

/**
 * This function sets the iconification callback of the specified window, which is called when the window is iconified or restored.
 *
 * @param window The window whose callback to set.
 * @param callback The new callback, or `NULL` to remove the currently set callback.
 *
 * @returns The previously set callback, or `NULL` if no callback was set or the library had not been [initialized](https://www.glfw.org/docs/3.3.2/intro_guide.html#intro_init).
 * @see [glfwSetWindowIconifyCallback](https://www.glfw.org/docs/3.3.2/group__window.html#gac793e9efd255567b5fb8b445052cfd3e)
 */
export function glfwSetWindowIconifyCallback(
	window: GLFWwindow,
	callback: GLFWwindowiconifyfun
): GLFWwindowiconifyfun;

/**
 * This function sets the maximization callback of the specified window, which is called when the window is maximized or restored.
 *
 * @param window The window whose callback to set.
 * @param callback The new callback, or `NULL` to remove the currently set callback.
 *
 * @returns The previously set callback, or `NULL` if no callback was set or the library had not been [initialized](https://www.glfw.org/docs/3.3.2/intro_guide.html#intro_init).
 * @see [glfwSetWindowMaximizeCallback](https://www.glfw.org/docs/3.3.2/group__window.html#gacbe64c339fbd94885e62145563b6dc93)
 */
export function glfwSetWindowMaximizeCallback(
	window: GLFWwindow,
	callback: GLFWwindowmaximizefun
): GLFWwindowmaximizefun;

/**
 * This function sets the framebuffer resize callback of the specified window, which is called when the framebuffer of the specified window is resized.
 *
 * @param window The window whose callback to set.
 * @param callback The new callback, or `NULL` to remove the currently set callback.
 *
 * @returns The previously set callback, or `NULL` if no callback was set or the library had not been [initialized](https://www.glfw.org/docs/3.3.2/intro_guide.html#intro_init).
 * @see [glfwSetFramebufferSizeCallback](https://www.glfw.org/docs/3.3.2/group__window.html#gab3fb7c3366577daef18c0023e2a8591f)
 */
export function glfwSetFramebufferSizeCallback(
	window: GLFWwindow,
	callback: GLFWframebuffersizefun
): GLFWframebuffersizefun;

/**
 * This function sets the window content scale callback of the specified window, which is called when the content scale of the specified window changes.
 *
 * @param window The window whose callback to set.
 * @param callback The new callback, or `NULL` to remove the currently set callback.
 *
 * @returns The previously set callback, or `NULL` if no callback was set or the library had not been [initialized](https://www.glfw.org/docs/3.3.2/intro_guide.html#intro_init).
 * @see [glfwSetWindowContentScaleCallback](https://www.glfw.org/docs/3.3.2/group__window.html#gaf2832ebb5aa6c252a2d261de002c92d6)
 */
export function glfwSetWindowContentScaleCallback(
	window: GLFWwindow,
	callback: GLFWwindowcontentscalefun
): GLFWwindowcontentscalefun;

/**
 * This function processes only those events that are already in the event queue and then returns immediately. Processing events will cause the window and input callbacks associated with those events to be called.
 *
 * On some platforms, a window move, resize or menu operation will cause event processing to block. This is due to how event processing is designed on those platforms. You can use the [window refresh callback](https://www.glfw.org/docs/3.3.2/window_guide.html#window_refresh) to redraw the contents of your window when necessary during such operations.
 *
 * Do not assume that callbacks you set will only be called in response to event processing functions like this one. While it is necessary to poll for events, window systems that require GLFW to register callbacks of its own can pass events to GLFW in response to many window system function calls. GLFW will pass those events on to the application callbacks before returning.
 *
 * Event processing is not required for joystick input to work.
 *
 * @see [glfwPollEvents](https://www.glfw.org/docs/3.3.2/group__window.html#ga37bd57223967b4211d60ca1a0bf3c832)
 */
export function glfwPollEvents(): void;

/**
 * This function puts the calling thread to sleep until at least one event is available in the event queue. Once one or more events are available, it behaves exactly like {@link glfwPollEvents}, i.e. the events in the queue are processed and the function then returns immediately. Processing events will cause the window and input callbacks associated with those events to be called.
 *
 * Since not all events are associated with callbacks, this function may return without a callback having been called even if you are monitoring all callbacks.
 *
 * On some platforms, a window move, resize or menu operation will cause event processing to block. This is due to how event processing is designed on those platforms. You can use the [window refresh callback](https://www.glfw.org/docs/3.3.2/window_guide.html#window_refresh) to redraw the contents of your window when necessary during such operations.
 *
 * Do not assume that callbacks you set will only be called in response to event processing functions like this one. While it is necessary to poll for events, window systems that require GLFW to register callbacks of its own can pass events to GLFW in response to many window system function calls. GLFW will pass those events on to the application callbacks before returning.
 *
 * Event processing is not required for joystick input to work.
 *
 * @see [glfwWaitEvents](https://www.glfw.org/docs/3.3.2/group__window.html#ga554e37d781f0a997656c26b2c56c835e)
 */
export function glfwWaitEvents(): void;

/**
 * This function puts the calling thread to sleep until at least one event is available in the event queue, or until the specified timeout is reached. If one or more events are available, it behaves exactly like {@link glfwPollEvents}, i.e. the events in the queue are processed and the function then returns immediately. Processing events will cause the window and input callbacks associated with those events to be called.
 *
 * The timeout value must be a positive finite number.
 *
 * Since not all events are associated with callbacks, this function may return without a callback having been called even if you are monitoring all callbacks.
 *
 * On some platforms, a window move, resize or menu operation will cause event processing to block. This is due to how event processing is designed on those platforms. You can use the [window refresh callback](https://www.glfw.org/docs/3.3.2/window_guide.html#window_refresh) to redraw the contents of your window when necessary during such operations.
 *
 * Do not assume that callbacks you set will only be called in response to event processing functions like this one. While it is necessary to poll for events, window systems that require GLFW to register callbacks of its own can pass events to GLFW in response to many window system function calls. GLFW will pass those events on to the application callbacks before returning.
 *
 * Event processing is not required for joystick input to work.
 *
 * @param timeout The maximum amount of time, in seconds, to wait.
 *
 * @see [glfwWaitEventsTimeout](https://www.glfw.org/docs/3.3.2/group__window.html#ga605a178db92f1a7f1a925563ef3ea2cf)
 */
export function glfwWaitEventsTimeout(timeout: bigint): void;

/**
 * This function posts an empty event from the current thread to the event queue, causing {@link glfwWaitEvents} or {@link glfwWaitEventsTimeout} to return.
 *
 * @see [glfwPostEmptyEvent](https://www.glfw.org/docs/3.3.2/group__window.html#gab5997a25187e9fd5c6f2ecbbc8dfd7e9)
 */
export function glfwPostEmptyEvent(): void;

/**
 * This function returns the value of an input option for the specified window. The mode must be one of {@link GLFW_CURSOR}, {@link GLFW_STICKY_KEYS}, {@link GLFW_STICKY_MOUSE_BUTTONS}, {@link GLFW_LOCK_KEY_MODS} or {@link GLFW_RAW_MOUSE_MOTION}.
 *
 * @param window The window to query.
 * @param mode One of `GLFW_CURSOR`, `GLFW_STICKY_KEYS`, `GLFW_STICKY_MOUSE_BUTTONS`, `GLFW_LOCK_KEY_MODS` or `GLFW_RAW_MOUSE_MOTION`.
 *
 * @see [glfwGetInputMode](https://www.glfw.org/docs/3.3.2/group__window.html#gaf5b859dbe19bdf434e42695ea45cc5f4)
 */
export function glfwGetInputMode(window: GLFWwindow, mode: number): number;

/**
 * This function sets an input mode option for the specified window. The mode must be one of {@link GLFW_CURSOR}, {@link GLFW_STICKY_KEYS}, {@link GLFW_STICKY_MOUSE_BUTTONS}, {@link GLFW_LOCK_KEY_MODS} or {@link GLFW_RAW_MOUSE_MOTION}.
 *
 * If the mode is `GLFW_CURSOR`, the value must be one of the following cursor modes:
 * - `GLFW_CURSOR_NORMAL` makes the cursor visible and behaving normally.
 * - `GLFW_CURSOR_HIDDEN` makes the cursor invisible when it is over the content area of the window but does not restrict the cursor from leaving.
 * - `GLFW_CURSOR_DISABLED` hides and grabs the cursor, providing virtual and unlimited cursor movement. This is useful for implementing for example 3D camera controls.
 *
 * If the mode is `GLFW_STICKY_KEYS`, the value must be either `GLFW_TRUE` to enable sticky keys, or `GLFW_FALSE` to disable it. If sticky keys are enabled, a key press will ensure that {@link glfwGetKey} returns `GLFW_PRESS` the next time it is called even if the key had been released before the call. This is useful when you are only interested in whether keys have been pressed but not when or in which order.
 *
 * If the mode is `GLFW_STICKY_MOUSE_BUTTONS`, the value must be either `GLFW_TRUE` to enable sticky mouse buttons, or `GLFW_FALSE` to disable it. If sticky mouse buttons are enabled, a mouse button press will ensure that {@link glfwGetMouseButton} returns `GLFW_PRESS` the next time it is called even if the mouse button had been released before the call. This is useful when you are only interested in whether mouse buttons have been pressed but not when or in which order.
 *
 * If the mode is `GLFW_LOCK_KEY_MODS`, the value must be either `GLFW_TRUE` to enable lock key modifier bits, or `GLFW_FALSE` to disable them. If enabled, callbacks that receive modifier bits will also have the {@link GLFW_MOD_CAPS_LOCK} bit set when the event was generated with Caps Lock on, and the {@link GLFW_MOD_NUM_LOCK} bit when Num Lock was on.
 *
 * If the mode is `GLFW_RAW_MOUSE_MOTION`, the value must be either `GLFW_TRUE` to enable raw (unscaled and unaccelerated) mouse motion when the cursor is disabled, or `GLFW_FALSE` to disable it. If raw motion is not supported, attempting to set this will emit {@link GLFW_PLATFORM_ERROR}. Call {@link glfwRawMouseMotionSupported} to check for support.
 *
 * @param window The window whose input mode to set.
 * @param mode One of `GLFW_CURSOR`, `GLFW_STICKY_KEYS`, `GLFW_STICKY_MOUSE_BUTTONS`, `GLFW_LOCK_KEY_MODS` or `GLFW_RAW_MOUSE_MOTION`.
 * @param value The new value of the specified input mode.
 *
 * @see [glfwSetInputMode](https://www.glfw.org/docs/3.3.2/group__window.html#gaa92336e173da9c8834558b54ee80563b)
 */
export function glfwSetInputMode(
	window: GLFWwindow,
	mode: number,
	value: number
): void;

/**
 * This function returns whether raw mouse motion is supported on the current system. This status does not change after GLFW has been initialized so you only need to check this once. If you attempt to enable raw motion on a system that does not support it, {@link GLFW_PLATFORM_ERROR} will be emitted.
 *
 * Raw mouse motion is closer to the actual motion of the mouse across a surface. It is not affected by the scaling and acceleration applied to the motion of the desktop cursor. That processing is suitable for a cursor while raw motion is better for controlling for example a 3D camera. Because of this, raw mouse motion is only provided when the cursor is disabled.
 *
 * @returns `GLFW_TRUE` if raw mouse motion is supported on the current machine, or `GLFW_FALSE` otherwise.
 * @see [glfwRawMouseMotionSupported](https://www.glfw.org/docs/3.3.2/group__window.html#gae4ee0dbd0d256183e1ea4026d897e1c2)
 */
export function glfwRawMouseMotionSupported(): number;

/**
 * This function returns the name of the specified printable key, encoded as UTF-8. This is typically the character that key would produce without any modifier keys, intended for displaying key bindings to the user. For dead keys, it is typically the diacritic it would add to a character.
 *
 * **Do not use this function** for [text input](https://www.glfw.org/docs/3.3.2/input_guide.html#input_char). You will break text input for many languages even if it happens to work for yours.
 *
 * If the key is `GLFW_KEY_UNKNOWN`, the scancode is used to identify the key, otherwise the scancode is ignored. If you specify a non-printable key, or `GLFW_KEY_UNKNOWN` and a scancode that maps to a non-printable key, this function returns `NULL` but does not emit an error.
 *
 * This behavior allows you to always pass in the arguments in the [key callback](https://www.glfw.org/docs/3.3.2/input_guide.html#input_key) without modification.
 *
 * The printable keys are:
 * - `GLFW_KEY_APOSTROPHE`
 * - `GLFW_KEY_COMMA`
 * - `GLFW_KEY_MINUS`
 * - `GLFW_KEY_PERIOD`
 * - `GLFW_KEY_SLASH`
 * - `GLFW_KEY_SEMICOLON`
 * - `GLFW_KEY_EQUAL`
 * - `GLFW_KEY_LEFT_BRACKET`
 * - `GLFW_KEY_RIGHT_BRACKET`
 * - `GLFW_KEY_BACKSLASH`
 * - `GLFW_KEY_WORLD_1`
 * - `GLFW_KEY_WORLD_2`
 * - `GLFW_KEY_0` to `GLFW_KEY_9`
 * - `GLFW_KEY_A` to `GLFW_KEY_Z`
 * - `GLFW_KEY_KP_0` to `GLFW_KEY_KP_9`
 * - `GLFW_KEY_KP_DECIMAL`
 * - `GLFW_KEY_KP_DIVIDE`
 * - `GLFW_KEY_KP_MULTIPLY`
 * - `GLFW_KEY_KP_SUBTRACT`
 * - `GLFW_KEY_KP_ADD`
 * - `GLFW_KEY_KP_EQUAL`
 *
 * Names for printable keys depend on keyboard layout, while names for non-printable keys are the same across layouts but depend on the application language and should be localized along with other user interface text.
 *
 * @param key The key to query, or `GLFW_KEY_UNKNOWN`.
 * @param scancode The scancode of the key to query.
 *
 * @returns The UTF-8 encoded, layout-specific name of the key, or `NULL`.
 * @see [glfwGetKeyName](https://www.glfw.org/docs/3.3.2/group__window.html#gaeaed62e69c3bd62b7ff8f7b19913ce4f)
 */
export function glfwGetKeyName(key: number, scancode: number): string;

/**
 * This function returns the platform-specific scancode of the specified key.
 *
 * If the key is `GLFW_KEY_UNKNOWN` or does not exist on the keyboard this method will return `-1`.
 *
 * @param key Any [named key](https://www.glfw.org/docs/3.3.2/group__keys.html).
 *
 * @returns The platform-specific scancode for the key, or `-1` if an [error](https://www.glfw.org/docs/3.3.2/intro_guide.html#error_handling) occurred.
 * @see [glfwGetKeyScancode](https://www.glfw.org/docs/3.3.2/group__window.html#ga67ddd1b7dcbbaff03e4a76c0ea67103a)
 */
export function glfwGetKeyScancode(key: number): number;

/**
 * This function returns the last state reported for the specified key to the specified window. The returned state is one of `GLFW_PRESS` or `GLFW_RELEASE`. The action `GLFW_REPEAT` is only reported to the key callback.
 *
 * If the {@link GLFW_STICKY_KEYS} input mode is enabled, this function returns `GLFW_PRESS` the first time you call it for a key that was pressed, even if that key has already been released.
 *
 * The key functions deal with physical keys, with [key tokens](https://www.glfw.org/docs/3.3.2/group__keys.html) named after their use on the standard US keyboard layout. If you want to input text, use the Unicode character callback instead.
 *
 * The [modifier key bit masks](https://www.glfw.org/docs/3.3.2/group__mods.html) are not key tokens and cannot be used with this function.
 *
 * **Do not use this function** to implement [text input](https://www.glfw.org/docs/3.3.2/input_guide.html#input_char).
 *
 * @param window The desired window.
 * @param key The desired [keyboard key](https://www.glfw.org/docs/3.3.2/group__keys.html). `GLFW_KEY_UNKNOWN` is not a valid key for this function.
 *
 * @returns One of `GLFW_PRESS` or `GLFW_RELEASE`.
 * @see [glfwGetKey](https://www.glfw.org/docs/3.3.2/group__window.html#gadd341da06bc8d418b4dc3a3518af9ad2)
 */
export function glfwGetKey(window: GLFWwindow, key: number): number;

/**
 * This function returns the last state reported for the specified mouse button to the specified window. The returned state is one of `GLFW_PRESS` or `GLFW_RELEASE`.
 *
 * If the {@link GLFW_STICKY_MOUSE_BUTTONS} input mode is enabled, this function returns `GLFW_PRESS` the first time you call it for a mouse button that was pressed, even if that mouse button has already been released.
 *
 * @param window The desired window.
 * @param button The desired [mouse button](https://www.glfw.org/docs/3.3.2/group__buttons.html).
 *
 * @returns One of `GLFW_PRESS` or `GLFW_RELEASE`.
 * @see [glfwGetMouseButton](https://www.glfw.org/docs/3.3.2/group__window.html#gac1473feacb5996c01a7a5a33b5066704)
 */
export function glfwGetMouseButton(window: GLFWwindow, button: number): number;

/**
 * This function returns the position of the cursor, in screen coordinates, relative to the upper-left corner of the content area of the specified window.
 *
 * If the cursor is disabled (with `GLFW_CURSOR_DISABLED`) then the cursor position is unbounded and limited only by the minimum and maximum values of a `double`.
 *
 * The coordinate can be converted to their integer equivalents with the `floor` function. Casting directly to an integer type works for positive coordinates, but fails for negative ones.
 *
 * Any or all of the position arguments may be `NULL`. If an error occurs, all non-`NULL` position arguments will be set to zero.
 *
 * @param window The desired window.
 * @param xpos Where to store the cursor x-coordinate, relative to the left edge of the content area, or `NULL`.
 * @param ypos Where to store the cursor y-coordinate, relative to the to top edge of the content area, or `NULL`.
 *
 * @see [glfwGetCursorPos](https://www.glfw.org/docs/3.3.2/group__window.html#ga01d37b6c40133676b9cea60ca1d7c0cc)
 */
export function glfwGetCursorPos(
	window: GLFWwindow,
	xpos: bigint,
	ypos: bigint
): void;

/**
 * This function sets the position, in screen coordinates, of the cursor relative to the upper-left corner of the content area of the specified window. The window must have input focus. If the window does not have input focus when this function is called, it fails silently.
 *
 * **Do not use this function** to implement things like camera controls. GLFW already provides the `GLFW_CURSOR_DISABLED` cursor mode that hides the cursor, transparently re-centers it and provides unconstrained cursor motion. See {@link glfwSetInputMode} for more information.
 *
 * If the cursor mode is `GLFW_CURSOR_DISABLED` then the cursor position is unconstrained and limited only by the minimum and maximum values of a `double`.
 *
 * @param window The desired window.
 * @param xpos The desired x-coordinate, relative to the left edge of the content area.
 * @param ypos The desired y-coordinate, relative to the top edge of the content area.
 *
 * @see [glfwSetCursorPos](https://www.glfw.org/docs/3.3.2/group__window.html#ga04b03af936d906ca123c8f4ee08b39e7)
 */
export function glfwSetCursorPos(
	window: GLFWwindow,
	xpos: bigint,
	ypos: bigint
): void;

/**
 * Creates a new custom cursor image that can be set for a window with {@link glfwSetCursor}. The cursor can be destroyed with {@link glfwDestroyCursor}. Any remaining cursors are destroyed by {@link glfwTerminate}.
 *
 * The pixels are 32-bit, little-endian, non-premultiplied RGBA, i.e. eight bits per channel with the red channel first. They are arranged canonically as packed sequential rows, starting from the top-left corner.
 *
 * The cursor hotspot is specified in pixels, relative to the upper-left corner of the cursor image. Like all other coordinate systems in GLFW, the X-axis points to the right and the Y-axis points down.
 *
 * @param image The desired cursor image.
 * @param xhot The desired x-coordinate, in pixels, of the cursor hotspot.
 * @param yhot The desired y-coordinate, in pixels, of the cursor hotspot.
 *
 * @returns The handle of the created cursor, or `NULL` if an [error](https://www.glfw.org/docs/3.3.2/intro_guide.html#error_handling) occurred.
 * @see [glfwCreateCursor](https://www.glfw.org/docs/3.3.2/group__window.html#ga556f604f73af156c0db0e97c081373c3)
 */
export function glfwCreateCursor(
	image: GLFWimage,
	xhot: number,
	yhot: number
): GLFWcursor;

/**
 * Returns a cursor with a [standard shape](https://www.glfw.org/docs/3.3.2/group__shapes.html), that can be set for a window with {@link glfwSetCursor}.
 *
 * @param shape One of the [standard shapes](https://www.glfw.org/docs/3.3.2/group__shapes.html).
 *
 * @returns A new cursor ready to use or `NULL` if an [error](https://www.glfw.org/docs/3.3.2/intro_guide.html#error_handling) occurred.
 * @see [glfwCreateStandardCursor](https://www.glfw.org/docs/3.3.2/group__window.html#gaf2fb2eb2c9dd842d1cef8a34e3c6403e)
 */
export function glfwCreateStandardCursor(shape: number): GLFWcursor;

/**
 * This function destroys a cursor previously created with {@link glfwCreateCursor}. Any remaining cursors will be destroyed by {@link glfwTerminate}.
 *
 * If the specified cursor is current for any window, that window will be reverted to the default cursor. This does not affect the cursor mode.
 *
 * @param cursor The cursor object to destroy.
 *
 * @see [glfwDestroyCursor](https://www.glfw.org/docs/3.3.2/group__window.html#ga81b952cd1764274d0db7fb3c5a79ba6a)
 */
export function glfwDestroyCursor(cursor: GLFWcursor): void;

/**
 * This function sets the cursor image to be used when the cursor is over the content area of the specified window. The set cursor will only be visible when the [cursor mode](https://www.glfw.org/docs/3.3.2/input_guide.html#cursor_mode) of the window is `GLFW_CURSOR_NORMAL`.
 *
 * On some platforms, the set cursor may not be visible unless the window also has input focus.
 *
 * @param window The window to set the cursor for.
 * @param cursor The cursor to set, or `NULL` to switch back to the default arrow cursor.
 *
 * @see [glfwSetCursor](https://www.glfw.org/docs/3.3.2/group__window.html#gad3b4f38c8d5dae036bc8fa959e18343e)
 */
export function glfwSetCursor(window: GLFWwindow, cursor: GLFWcursor): void;

/**
 * This function sets the key callback of the specified window, which is called when a key is pressed, repeated or released.
 *
 * The key functions deal with physical keys, with layout independent [key tokens](https://www.glfw.org/docs/3.3.2/group__keys.html) named after their values in the standard US keyboard layout. If you want to input text, use the {@link glfwSetCharCallback} instead.
 *
 * When a window loses input focus, it will generate synthetic key release events for all pressed keys. You can tell these events from user-generated events by the fact that the synthetic ones are generated after the focus loss event has been processed, i.e. after {@link glfwSetWindowFocusCallback} has been called.
 *
 * The scancode of a key is specific to that platform or sometimes even to that machine. Scancodes are intended to allow users to bind keys that don't have a GLFW key token. Such keys have `key` set to `GLFW_KEY_UNKNOWN`, their state is not saved and so it cannot be queried with {@link glfwGetKey}.
 *
 * Sometimes GLFW needs to generate synthetic key events, in which case the scancode may be zero.
 *
 * @param window The window whose callback to set.
 * @param callback The new key callback, or `NULL` to remove the currently set callback.
 *
 * @returns The previously set callback, or `NULL` if no callback was set or the library had not been [initialized](https://www.glfw.org/docs/3.3.2/intro_guide.html#intro_init).
 * @see [glfwSetKeyCallback](https://www.glfw.org/docs/3.3.2/group__window.html#ga1caf18159767e761185e49a3be019f8d)
 */
export function glfwSetKeyCallback(
	window: GLFWwindow,
	callback: GLFWkeyfun
): GLFWkeyfun;

/**
 * This function sets the character callback of the specified window, which is called when a Unicode character is input.
 *
 * The character callback is intended for Unicode text input. As it deals with characters, it is keyboard layout dependent, whereas {@link glfwSetKeyCallback} is not. Characters do not map 1:1 to physical keys, as a key may produce zero, one or more characters. If you want to know whether a specific physical key was pressed or released, see the key callback instead.
 *
 * The character callback behaves as system text input normally does and will not be called if modifier keys are held down that would prevent normal text input on that platform, for example a Super (Command) key on macOS or Alt key on Windows.
 *
 * @param window The window whose callback to set.
 * @param callback The new callback, or `NULL` to remove the currently set callback.
 *
 * @returns The previously set callback, or `NULL` if no callback was set or the library had not been [initialized](https://www.glfw.org/docs/3.3.2/intro_guide.html#intro_init).
 * @see [glfwSetCharCallback](https://www.glfw.org/docs/3.3.2/group__window.html#gab25c4a220fd8f5717718dbc487828996)
 */
export function glfwSetCharCallback(
	window: GLFWwindow,
	callback: GLFWcharfun
): GLFWcharfun;

/**
 * This function sets the character with modifiers callback of the specified window, which is called when a Unicode character is input regardless of what modifier keys are used.
 *
 * The character with modifiers callback is intended for implementing custom Unicode character input. For regular Unicode text input, see {@link glfwSetCharCallback}. Like the character callback, the character with modifiers callback deals with characters and is keyboard layout dependent. Characters do not map 1:1 to physical keys, as a key may produce zero, one or more characters. If you want to know whether a specific physical key was pressed or released, see {@link glfwSetKeyCallback} instead.
 *
 * @param window The window whose callback to set.
 * @param callback The new callback, or `NULL` to remove the currently set callback.
 *
 * @returns The previously set callback, or `NULL` if no callback was set or the library had not been [initialized](https://www.glfw.org/docs/3.3.2/intro_guide.html#intro_init).
 * @see [glfwSetCharModsCallback](https://www.glfw.org/docs/3.3.2/group__window.html#ga0b7f4ad13c2b17435ff13b6dcfb4e43c)
 */
export function glfwSetCharModsCallback(
	window: GLFWwindow,
	callback: GLFWcharmodsfun
): GLFWcharmodsfun;

/**
 * This function sets the mouse button callback of the specified window, which is called when a mouse button is pressed or released.
 *
 * When a window loses input focus, it will generate synthetic mouse button release events for all pressed mouse buttons. You can tell these events from user-generated events by the fact that the synthetic ones are generated after the focus loss event has been processed, i.e. after {@link glfwSetWindowFocusCallback} has been called.
 *
 * @param window The window whose callback to set.
 * @param callback The new callback, or `NULL` to remove the currently set callback.
 *
 * @returns The previously set callback, or `NULL` if no callback was set or the library had not been [initialized](https://www.glfw.org/docs/3.3.2/intro_guide.html#intro_init).
 * @see [glfwSetMouseButtonCallback](https://www.glfw.org/docs/3.3.2/group__window.html#ga6ab84420974d812bee700e45284a723c)
 */
export function glfwSetMouseButtonCallback(
	window: GLFWwindow,
	callback: GLFWmousebuttonfun
): GLFWmousebuttonfun;

/**
 * This function sets the cursor position callback of the specified window, which is called when the cursor is moved. The callback is provided with the position, in screen coordinates, relative to the upper-left corner of the content area of the window.
 *
 * @param window The window whose callback to set.
 * @param callback The new callback, or `NULL` to remove the currently set callback.
 *
 * @returns The previously set callback, or `NULL` if no callback was set or the library had not been [initialized](https://www.glfw.org/docs/3.3.2/intro_guide.html#intro_init).
 * @see [glfwSetCursorPosCallback](https://www.glfw.org/docs/3.3.2/group__window.html#gac1f879ab7435d54d4d79bb469fe225d7)
 */
export function glfwSetCursorPosCallback(
	window: GLFWwindow,
	callback: GLFWcursorposfun
): GLFWcursorposfun;

/**
 * This function sets the cursor boundary crossing callback of the specified window, which is called when the cursor enters or leaves the content area of the window.
 *
 * @param window The window whose callback to set.
 * @param callback The new callback, or `NULL` to remove the currently set callback.
 *
 * @returns The previously set callback, or `NULL` if no callback was set or the library had not been [initialized](https://www.glfw.org/docs/3.3.2/intro_guide.html#intro_init).
 * @see [glfwSetCursorEnterCallback](https://www.glfw.org/docs/3.3.2/group__window.html#gad27f8ad0142c038a281466c0966817d8)
 */
export function glfwSetCursorEnterCallback(
	window: GLFWwindow,
	callback: GLFWcursorenterfun
): GLFWcursorenterfun;

/**
 * This function sets the scroll callback of the specified window, which is called when a scrolling device is used, such as a mouse wheel or scrolling area of a touchpad.
 *
 * The scroll callback receives all scrolling input, like that from a mouse wheel or a touchpad scrolling area.
 *
 * @param window The window whose callback to set.
 * @param callback The new callback, or `NULL` to remove the currently set callback.
 *
 * @returns The previously set callback, or `NULL` if no callback was set or the library had not been [initialized](https://www.glfw.org/docs/3.3.2/intro_guide.html#intro_init).
 * @see [glfwSetScrollCallback](https://www.glfw.org/docs/3.3.2/group__window.html#ga571e45a030ae4061f746ed56cb76aede)
 */
export function glfwSetScrollCallback(
	window: GLFWwindow,
	callback: GLFWscrollfun
): GLFWscrollfun;

/**
 * This function sets the path drop callback of the specified window, which is called when one or more dragged paths are dropped on the window.
 *
 * Because the path array and its strings may have been generated specifically for that event, they are not guaranteed to be valid after the callback has returned. If you wish to use them after the callback returns, you need to make a deep copy.
 *
 * @param window The window whose callback to set.
 * @param callback The new callback, or `NULL` to remove the currently set callback.
 *
 * @returns The previously set callback, or `NULL` if no callback was set or the library had not been [initialized](https://www.glfw.org/docs/3.3.2/intro_guide.html#intro_init).
 * @see [glfwSetDropCallback](https://www.glfw.org/docs/3.3.2/group__window.html#gab773f0ee0a07cff77a210cea40bc1f6b)
 */
export function glfwSetDropCallback(
	window: GLFWwindow,
	callback: GLFWdropfun
): GLFWdropfun;

/**
 * This function returns whether the specified joystick is present.
 *
 * There is no need to call this function before other functions that accept a joystick ID, as they all check for presence before performing any other work.
 *
 * @param jid The [joystick](https://www.glfw.org/docs/3.3.2/group__joysticks.html) to query.
 *
 * @returns `GLFW_TRUE` if the joystick is present, or `GLFW_FALSE` otherwise.
 * @see [glfwJoystickPresent](https://www.glfw.org/docs/3.3.2/group__window.html#gaed0966cee139d815317f9ffcba64c9f1)
 */
export function glfwJoystickPresent(jid: number): number;

/**
 * This function returns the values of all axes of the specified joystick. Each element in the array is a value between -1.0 and 1.0.
 *
 * If the specified joystick is not present this function will return `NULL` but will not generate an error. This can be used instead of first calling {@link glfwJoystickPresent}.
 *
 * @param jid The [joystick](https://www.glfw.org/docs/3.3.2/group__joysticks.html) to query.
 * @param count Where to store the number of axis values in the returned array. This is set to zero if the joystick is not present or an error occurred.
 *
 * @returns An array of axis values, or `NULL` if the joystick is not present or an [error](https://www.glfw.org/docs/3.3.2/intro_guide.html#error_handling) occurred.
 * @see [glfwGetJoystickAxes](https://www.glfw.org/docs/3.3.2/group__window.html#gaeb1c0191d3140a233a682987c61eb408)
 */
export function glfwGetJoystickAxes(jid: number, count: number): bigint;

/**
 * This function returns the state of all buttons of the specified joystick. Each element in the array is either `GLFW_PRESS` or `GLFW_RELEASE`.
 *
 * For backward compatibility with earlier versions that did not have {@link glfwGetJoystickHats}, the button array also includes all hats, each represented as four buttons. The hats are in the same order as returned by **glfwGetJoystickHats** and are in the order *up*, *right*, *down* and *left*. To disable these extra buttons, set the {@link GLFW_JOYSTICK_HAT_BUTTONS} init hint before initialization.
 *
 * If the specified joystick is not present this function will return `NULL` but will not generate an error. This can be used instead of first calling {@link glfwJoystickPresent}.
 *
 * @param jid The [joystick](https://www.glfw.org/docs/3.3.2/group__joysticks.html) to query.
 * @param count Where to store the number of button states in the returned array. This is set to zero if the joystick is not present or an error occurred.
 *
 * @returns An array of button states, or `NULL` if the joystick is not present or an [error](https://www.glfw.org/docs/3.3.2/intro_guide.html#error_handling) occurred.
 * @see [glfwGetJoystickButtons](https://www.glfw.org/docs/3.3.2/group__window.html#ga5ffe34739d3dc97efe432ed2d81d9938)
 */
export function glfwGetJoystickButtons(jid: number, count: number): string;

/**
 * This function returns the state of all hats of the specified joystick. Each element in the array is one of the following values:
 * | Name                  | Value                                   |
 * | :-------------------- | :-------------------------------------- |
 * | `GLFW_HAT_CENTERED`   | 0                                       |
 * | `GLFW_HAT_UP`         | 1                                       |
 * | `GLFW_HAT_RIGHT`      | 2                                       |
 * | `GLFW_HAT_DOWN`       | 4                                       |
 * | `GLFW_HAT_LEFT`       | 8                                       |
 * | `GLFW_HAT_RIGHT_UP`   | `GLFW_HAT_RIGHT` &#124; `GLFW_HAT_UP`   |
 * | `GLFW_HAT_RIGHT_DOWN` | `GLFW_HAT_RIGHT` &#124; `GLFW_HAT_DOWN` |
 * | `GLFW_HAT_LEFT_UP`    | `GLFW_HAT_LEFT` &#124; `GLFW_HAT_UP`    |
 * | `GLFW_HAT_LEFT_DOWN`  | `GLFW_HAT_LEFT` &#124; `GLFW_HAT_DOWN`  |
 *
 * The diagonal directions are bitwise combinations of the primary (up, right, down and left) directions and you can test for these individually by ANDing it with the corresponding direction.
 *
 * ```js
 * if (hats[2] && GLFW_HAT_RIGHT)
 * {
 *     // State of hat 2 could be right-up, right or right-down
 * }
 * ```
 *
 * If the specified joystick is not present this function will return `NULL` but will not generate an error. This can be used instead of first calling {@link glfwJoystickPresent}.
 *
 * @param jid The [joystick](https://www.glfw.org/docs/3.3.2/group__joysticks.html) to query.
 * @param count Where to store the number of hat states in the returned array. This is set to zero if the joystick is not present or an error occurred.
 *
 * @returns An array of hat states, or `NULL` if the joystick is not present or an [error](https://www.glfw.org/docs/3.3.2/intro_guide.html#error_handling) occurred.
 * @see [glfwGetJoystickHats](https://www.glfw.org/docs/3.3.2/group__window.html#ga06e660841b3e79c54da4f54a932c5a2c)
 */
export function glfwGetJoystickHats(jid: number, count: number): string;

/**
 * This function returns the name, encoded as UTF-8, of the specified joystick. The returned string is allocated and freed by GLFW. You should not free it yourself.
 *
 * If the specified joystick is not present this function will return `NULL` but will not generate an error. This can be used instead of first calling {@link glfwJoystickPresent}.
 *
 * @param jid The [joystick](https://www.glfw.org/docs/3.3.2/group__joysticks.html) to query.
 *
 * @returns The UTF-8 encoded name of the joystick, or `NULL` if the joystick is not present or an [error](https://www.glfw.org/docs/3.3.2/intro_guide.html#error_handling) occurred.
 * @see [glfwGetJoystickName](https://www.glfw.org/docs/3.3.2/group__window.html#gac6a8e769e18e0bcfa9097793fc2c3978)
 */
export function glfwGetJoystickName(jid: number): string;

/**
 * This function returns the SDL compatible GUID, as a UTF-8 encoded hexadecimal string, of the specified joystick. The returned string is allocated and freed by GLFW. You should not free it yourself.
 *
 * The GUID is what connects a joystick to a gamepad mapping. A connected joystick will always have a GUID even if there is no gamepad mapping assigned to it.
 *
 * If the specified joystick is not present this function will return `NULL` but will not generate an error. This can be used instead of first calling {@link glfwJoystickPresent}.
 *
 * The GUID uses the format introduced in SDL 2.0.5. This GUID tries to uniquely identify the make and model of a joystick but does not identify a specific unit, e.g. all wired Xbox 360 controllers will have the same GUID on that platform. The GUID for a unit may vary between platforms depending on what hardware information the platform specific APIs provide.
 *
 * @param jid The [joystick](https://www.glfw.org/docs/3.3.2/group__joysticks.html) to query.
 *
 * @returns The UTF-8 encoded GUID of the joystick, or `NULL` if the joystick is not present or an [error](https://www.glfw.org/docs/3.3.2/intro_guide.html#error_handling) occurred.
 * @see [glfwGetJoystickGUID](https://www.glfw.org/docs/3.3.2/group__window.html#ga6659411aec3c7fcef27780e2cb2d9600)
 */
export function glfwGetJoystickGUID(jid: number): string;

/**
 * This function sets the user-defined pointer of the specified joystick. The current value is retained until the joystick is disconnected. The initial value is `NULL`.
 *
 * This function may be called from the joystick callback, even for a joystick that is being disconnected.
 *
 * @param jid The joystick whose pointer to set.
 * @param pointer The new value.
 *
 * @see [glfwSetJoystickUserPointer](https://www.glfw.org/docs/3.3.2/group__window.html#ga6b2f72d64d636b48a727b437cbb7489e)
 */
export function glfwSetJoystickUserPointer(jid: number, pointer: void): void;

/**
 * This function returns the current value of the user-defined pointer of the specified joystick. The initial value is `NULL`.
 *
 * This function may be called from the joystick callback, even for a joystick that is being disconnected.
 *
 * @param jid The joystick whose pointer to return.
 *
 * @see [glfwGetJoystickUserPointer](https://www.glfw.org/docs/3.3.2/group__window.html#ga18cefd7265d1fa04f3fd38a6746db5f3)
 */
export function glfwGetJoystickUserPointer(jid: number): void;

/**
 * This function returns whether the specified joystick is both present and has a gamepad mapping.
 *
 * If the specified joystick is present but does not have a gamepad mapping this function will return `GLFW_FALSE` but will not generate an error. Call {@link glfwJoystickPresent} to check if a joystick is present regardless of whether it has a mapping.
 *
 * @param jid The [joystick](https://www.glfw.org/docs/3.3.2/group__joysticks.html) to query.
 *
 * @returns `GLFW_TRUE` if a joystick is both present and has a gamepad mapping, or `GLFW_FALSE` otherwise.
 * @see [glfwJoystickIsGamepad](https://www.glfw.org/docs/3.3.2/group__window.html#gad0f676860f329d80f7e47e9f06a96f00)
 */
export function glfwJoystickIsGamepad(jid: number): number;

/**
 * This function sets the joystick configuration callback, or removes the currently set callback. This is called when a joystick is connected to or disconnected from the system.
 *
 * For joystick connection and disconnection events to be delivered on all platforms, you need to call one of the [event processing](https://www.glfw.org/docs/3.3.2/input_guide.html#events) functions. Joystick disconnection may also be detected and the callback called by joystick functions. The function will then return whatever it returns if the joystick is not present.
 *
 * @param callback The new callback, or `NULL` to remove the currently set callback.
 *
 * @returns The previously set callback, or `NULL` if no callback was set or the library had not been [initialized](https://www.glfw.org/docs/3.3.2/intro_guide.html#intro_init).
 * @see [glfwSetJoystickCallback](https://www.glfw.org/docs/3.3.2/group__window.html#ga2f60a0e5b7bd8d1b7344dc0a7cb32b4c)
 */
export function glfwSetJoystickCallback(
	callback: GLFWjoystickfun
): GLFWjoystickfun;

/**
 * This function parses the specified ASCII encoded string and updates the internal list with any gamepad mappings it finds. This string may contain either a single gamepad mapping or many mappings separated by newlines. The parser supports the full format of the `gamecontrollerdb.txt` source file including empty lines and comments.
 *
 * See [Gamepad mappings](https://www.glfw.org/docs/3.3.2/input_guide.html#gamepad_mapping) for a description of the format.
 *
 * If there is already a gamepad mapping for a given GUID in the internal list, it will be replaced by the one passed to this function. If the library is terminated and re-initialized the internal list will revert to the built-in default.
 *
 * @param string The string containing the gamepad mappings.
 *
 * @returns `GLFW_TRUE` if successful, or `GLFW_FALSE` if an [error](https://www.glfw.org/docs/3.3.2/intro_guide.html#error_handling) occurred.
 * @see [glfwUpdateGamepadMappings](https://www.glfw.org/docs/3.3.2/group__window.html#gaed5104612f2fa8e66aa6e846652ad00f)
 */
export function glfwUpdateGamepadMappings(string: string): number;

/**
 * This function returns the human-readable name of the gamepad from the gamepad mapping assigned to the specified joystick.
 *
 * If the specified joystick is not present or does not have a gamepad mapping this function will return `NULL` but will not generate an error. Call {@link glfwJoystickPresent} to check whether it is present regardless of whether it has a mapping.
 *
 * @param jid The [joystick](https://www.glfw.org/docs/3.3.2/group__joysticks.html) to query.
 *
 * @returns The UTF-8 encoded name of the gamepad, or `NULL` if the joystick is not present, does not have a mapping or an [error](https://www.glfw.org/docs/3.3.2/intro_guide.html#error_handling) occurred.
 * @see [glfwGetGamepadName](https://www.glfw.org/docs/3.3.2/group__window.html#ga8aea73a1a25cc6c0486a617019f56728)
 */
export function glfwGetGamepadName(jid: number): string;

/**
 * This function retrieves the state of the specified joystick remapped to an Xbox-like gamepad.
 *
 * If the specified joystick is not present or does not have a gamepad mapping this function will return `GLFW_FALSE` but will not generate an error. Call {@link glfwJoystickPresent} to check whether it is present regardless of whether it has a mapping.
 *
 * The Guide button may not be available for input as it is often hooked by the system or the Steam client.
 *
 * Not all devices have all the buttons or axes provided by [GLFWgamepadstate](https://www.glfw.org/docs/3.3.2/structGLFWgamepadstate.html). Unavailable buttons and axes will always report `GLFW_RELEASE` and 0.0 respectively.
 *
 * @param jid The [joystick](https://www.glfw.org/docs/3.3.2/group__joysticks.html) to query.
 * @param state The gamepad input state of the joystick.
 *
 * @returns `GLFW_TRUE` if successful, or `GLFW_FALSE` if no joystick is connected, it has no gamepad mapping or an [error](https://www.glfw.org/docs/3.3.2/intro_guide.html#error_handling) occurred.
 * @see [glfwGetGamepadState](https://www.glfw.org/docs/3.3.2/group__window.html#gadccddea8bce6113fa459de379ddaf051)
 */
export function glfwGetGamepadState(
	jid: number,
	state: GLFWgamepadstate
): number;

/**
 * This function sets the system clipboard to the specified, UTF-8 encoded string.
 *
 * @param window Deprecated. Any valid window or `NULL`.
 * @param string A UTF-8 encoded string.
 *
 * @see [glfwSetClipboardString](https://www.glfw.org/docs/3.3.2/group__window.html#gaba1f022c5eb07dfac421df34cdcd31dd)
 */
export function glfwSetClipboardString(
	window: GLFWwindow,
	string: string
): void;

/**
 * This function returns the contents of the system clipboard, if it contains or is convertible to a UTF-8 encoded string. If the clipboard is empty or if its contents cannot be converted, `NULL` is returned and a {@link GLFW_FORMAT_UNAVAILABLE} error is generated.
 *
 * @param window Deprecated. Any valid window or `NULL`.
 *
 * @returns The contents of the clipboard as a UTF-8 encoded string, or `NULL` if an [error](https://www.glfw.org/docs/3.3.2/intro_guide.html#error_handling) occurred.
 * @see [glfwGetClipboardString](https://www.glfw.org/docs/3.3.2/group__window.html#ga71a5b20808ea92193d65c21b82580355)
 */
export function glfwGetClipboardString(window: GLFWwindow): string;

/**
 * This function returns the current GLFW time, in seconds. Unless the time has been set using {@link glfwSetTime} it measures time elapsed since GLFW was initialized.
 *
 * This function and {@link glfwSetTime} are helper functions on top of {@link glfwGetTimerFrequency} and {@link glfwGetTimerValue}.
 *
 * The resolution of the timer is system dependent, but is usually on the order of a few micro- or nanoseconds. It uses the highest-resolution monotonic time source on each supported platform.
 *
 * @returns The current time, in seconds, or zero if an [error](https://www.glfw.org/docs/3.3.2/intro_guide.html#error_handling) occurred.
 * @see [glfwGetTime](https://www.glfw.org/docs/3.3.2/group__window.html#gaa6cf4e7a77158a3b8fd00328b1720a4a)
 */
export function glfwGetTime(): bigint;

/**
 * This function sets the current GLFW time, in seconds. The value must be a positive finite number less than or equal to 18446744073.0, which is approximately 584.5 years.
 *
 * This function and {@link glfwGetTime} are helper functions on top of {@link glfwGetTimerFrequency} and {@link glfwGetTimerValue}.
 *
 * @param time The new value, in seconds.
 *
 * @see [glfwSetTime](https://www.glfw.org/docs/3.3.2/group__window.html#gaf59589ef6e8b8c8b5ad184b25afd4dc0)
 */
export function glfwSetTime(time: bigint): void;

/**
 * This function returns the current value of the raw timer, measured in 1 / frequency seconds. To get the frequency, call {@link glfwGetTimerFrequency}.
 *
 * @returns The value of the timer, or zero if an [error](https://www.glfw.org/docs/3.3.2/intro_guide.html#error_handling) occurred.
 * @see [glfwGetTimerValue](https://www.glfw.org/docs/3.3.2/group__window.html#ga09b2bd37d328e0b9456c7ec575cc26aa)
 */
export function glfwGetTimerValue(): number;

/**
 * This function returns the frequency, in Hz, of the raw timer.
 *
 * @returns The frequency of the timer, in Hz, or zero if an [error](https://www.glfw.org/docs/3.3.2/intro_guide.html#error_handling) occurred.
 * @see [glfwGetTimerFrequency](https://www.glfw.org/docs/3.3.2/group__window.html#ga3289ee876572f6e91f06df3a24824443)
 */
export function glfwGetTimerFrequency(): number;

/**
 * This function makes the OpenGL or OpenGL ES context of the specified window current on the calling thread. A context must only be made current on a single thread at a time and each thread can have only a single current context at a time.
 *
 * When moving a context between threads, you must make it non-current on the old thread before making it current on the new one.
 *
 * By default, making a context non-current implicitly forces a pipeline flush. On machines that support `GL_KHR_context_flush_control`, you can control whether a context performs this flush by setting the {@link GLFW_CONTEXT_RELEASE_BEHAVIOR} hint.
 *
 * The specified window must have an OpenGL or OpenGL ES context. Specifying a window without a context will generate a {@link GLFW_NO_WINDOW_CONTEXT} error.
 *
 * @param window The window whose context to make current, or NULL to detach the current context.
 *
 * @see [glfwMakeContextCurrent](https://www.glfw.org/docs/3.3.2/group__window.html#ga1c04dc242268f827290fe40aa1c91157)
 */
export function glfwMakeContextCurrent(window: GLFWwindow): void;

/**
 * This function returns the window whose OpenGL or OpenGL ES context is current on the calling thread.
 *
 * @returns The window whose context is current, or `NULL` if no window's context is current.
 * @see [glfwGetCurrentContext](https://www.glfw.org/docs/3.3.2/group__window.html#gad94e80185397a6cf5fe2ab30567af71c)
 */
export function glfwGetCurrentContext(): GLFWwindow;

/**
 * This function swaps the front and back buffers of the specified window when rendering with OpenGL or OpenGL ES. If the swap interval is greater than zero, the GPU driver waits the specified number of screen updates before swapping the buffers.
 *
 * The specified window must have an OpenGL or OpenGL ES context. Specifying a window without a context will generate a {@link GLFW_NO_WINDOW_CONTEXT} error.
 *
 * This function does not apply to Vulkan. If you are rendering with Vulkan, see `vkQueuePresentKHR` instead.
 *
 * @param window The window whose buffers to swap.
 *
 * @see [glfwSwapBuffers](https://www.glfw.org/docs/3.3.2/group__window.html#ga15a5a1ee5b3c2ca6b15ca209a12efd14)
 */
export function glfwSwapBuffers(window: GLFWwindow): void;

/**
 * This function sets the swap interval for the current OpenGL or OpenGL ES context, i.e. the number of screen updates to wait from the time {@link glfwSwapBuffers} was called before swapping the buffers and returning. This is sometimes called *vertical synchronization*, *vertical retrace synchronization* or just *vsync*.
 *
 * A context that supports either of the `WGL_EXT_swap_control_tear` and `GLX_EXT_swap_control_tear` extensions also accepts *negative* swap intervals, which allows the driver to swap immediately even if a frame arrives a little bit late. You can check for these extensions with {@link glfwExtensionSupported}.
 *
 * A context must be current on the calling thread. Calling this function without a current context will cause a {@link GLFW_NO_CURRENT_CONTEXT} error.
 *
 * This function does not apply to Vulkan. If you are rendering with Vulkan, see the present mode of your swapchain instead.
 *
 * @param interval The minimum number of screen updates to wait for until the buffers are swapped by {@link glfwSwapBuffers}.
 *
 * @see [glfwSwapInterval](https://www.glfw.org/docs/3.3.2/group__window.html#ga6d4e0cdf151b5e579bd67f13202994ed)
 */
export function glfwSwapInterval(interval: number): void;

/**
 * This function returns whether the specified [API extension](https://www.glfw.org/docs/3.3.2/context_guide.html#context_glext) is supported by the current OpenGL or OpenGL ES context. It searches both for client API extension and context creation API extensions.
 *
 * A context must be current on the calling thread. Calling this function without a current context will cause a {@link GLFW_NO_CURRENT_CONTEXT} error.
 *
 * As this functions retrieves and searches one or more extension strings each call, it is recommended that you cache its results if it is going to be used frequently. The extension strings will not change during the lifetime of a context, so there is no danger in doing this.
 *
 * This function does not apply to Vulkan. If you are using Vulkan, see {@link glfwGetRequiredInstanceExtensions}, `vkEnumerateInstanceExtensionProperties` and `vkEnumerateDeviceExtensionProperties` instead.
 *
 * @param extension The ASCII encoded name of the extension.
 *
 * @returns GLFW_TRUE` if the extension is available, or `GLFW_FALSE` otherwise.
 * @see [glfwExtensionSupported](https://www.glfw.org/docs/3.3.2/group__window.html#ga87425065c011cef1ebd6aac75e059dfa)
 */
export function glfwExtensionSupported(extension: string): number;

/**
 * This function returns the address of the specified OpenGL or OpenGL ES [core or extension function](https://www.glfw.org/docs/3.3.2/context_guide.html#context_glext), if it is supported by the current context.
 *
 * A context must be current on the calling thread. Calling this function without a current context will cause a {@link GLFW_NO_CURRENT_CONTEXT} error.
 *
 * This function does not apply to Vulkan. If you are rendering with Vulkan, see {@link glfwGetInstanceProcAddress}, `vkGetInstanceProcAddr` and `vkGetDeviceProcAddr` instead.
 *
 * @param procname The ASCII encoded name of the function.
 *
 * @returns The address of the function, or `NULL` if an [error](https://www.glfw.org/docs/3.3.2/intro_guide.html#error_handling) occurred.
 * @see [glfwGetProcAddress](https://www.glfw.org/docs/3.3.2/group__window.html#ga35f1837e6f666781842483937612f163)
 */
export function glfwGetProcAddress(procname: string): GLFWglproc;

/**
 * This function returns whether the Vulkan loader and any minimally functional ICD have been found.
 *
 * The availability of a Vulkan loader and even an ICD does not by itself guarantee that surface creation or even instance creation is possible. Call {@link glfwGetRequiredInstanceExtensions} to check whether the extensions necessary for Vulkan surface creation are available and {@link glfwGetPhysicalDevicePresentationSupport} to check whether a queue family of a physical device supports image presentation.
 *
 * @returns `GLFW_TRUE` if Vulkan is minimally available, or `GLFW_FALSE` otherwise.
 * @see [glfwVulkanSupported](https://www.glfw.org/docs/3.3.2/group__window.html#ga2e7f30931e02464b5bc8d0d4b6f9fe2b)
 */
export function glfwVulkanSupported(): number;

/**
 * This function returns an array of names of Vulkan instance extensions required by GLFW for creating Vulkan surfaces for GLFW windows. If successful, the list will always contain `VK_KHR_surface`, so if you don't require any additional extensions you can pass this list directly to the `VkInstanceCreateInfo` struct.
 *
 * If Vulkan is not available on the machine, this function returns `NULL` and generates a {@link GLFW_API_UNAVAILABLE} error. Call {@link glfwVulkanSupported} to check whether Vulkan is at least minimally available.
 *
 * If Vulkan is available but no set of extensions allowing window surface creation was found, this function returns `NULL`. You may still use Vulkan for off-screen rendering and compute work.
 *
 * @param count Where to store the number of extensions in the returned array. This is set to zero if an error occurred.
 *
 * @returns An array of ASCII encoded extension names, or `NULL` if an [error](https://www.glfw.org/docs/3.3.2/intro_guide.html#error_handling) occurred.
 * @see [glfwGetRequiredInstanceExtensions](https://www.glfw.org/docs/3.3.2/group__window.html#ga99ad342d82f4a3421e2864978cb6d1d6)
 */
export function glfwGetRequiredInstanceExtensions(count: number): string;

export declare let GL_FALSE: number;
export declare let GL_TRUE: number;
export declare let GL_RGBA8: number;
export declare let GLFW_VERSION_MAJOR: number;
export declare let GLFW_VERSION_MINOR: number;
export declare let GLFW_VERSION_REVISION: number;
export declare let GLFW_TRUE: number;
export declare let GLFW_FALSE: number;
export declare let GLFW_RELEASE: number;
export declare let GLFW_PRESS: number;
export declare let GLFW_REPEAT: number;
export declare let GLFW_HAT_CENTERED: number;
export declare let GLFW_HAT_UP: number;
export declare let GLFW_HAT_RIGHT: number;
export declare let GLFW_HAT_DOWN: number;
export declare let GLFW_HAT_LEFT: number;
export declare let GLFW_HAT_RIGHT_UP: number;
export declare let GLFW_HAT_RIGHT_DOWN: number;
export declare let GLFW_HAT_LEFT_UP: number;
export declare let GLFW_HAT_LEFT_DOWN: number;
export declare let GLFW_KEY_UNKNOWN: number;
export declare let GLFW_KEY_SPACE: number;
export declare let GLFW_KEY_APOSTROPHE: number;
export declare let GLFW_KEY_MINUS: number;
export declare let GLFW_KEY_PERIOD: number;
export declare let GLFW_KEY_SLASH: number;
export declare let GLFW_KEY_0: number;
export declare let GLFW_KEY_1: number;
export declare let GLFW_KEY_2: number;
export declare let GLFW_KEY_3: number;
export declare let GLFW_KEY_4: number;
export declare let GLFW_KEY_5: number;
export declare let GLFW_KEY_6: number;
export declare let GLFW_KEY_7: number;
export declare let GLFW_KEY_8: number;
export declare let GLFW_KEY_9: number;
export declare let GLFW_KEY_SEMICOLON: number;
export declare let GLFW_KEY_EQUAL: number;
export declare let GLFW_KEY_A: number;
export declare let GLFW_KEY_B: number;
export declare let GLFW_KEY_C: number;
export declare let GLFW_KEY_D: number;
export declare let GLFW_KEY_E: number;
export declare let GLFW_KEY_F: number;
export declare let GLFW_KEY_G: number;
export declare let GLFW_KEY_H: number;
export declare let GLFW_KEY_I: number;
export declare let GLFW_KEY_J: number;
export declare let GLFW_KEY_K: number;
export declare let GLFW_KEY_L: number;
export declare let GLFW_KEY_M: number;
export declare let GLFW_KEY_N: number;
export declare let GLFW_KEY_O: number;
export declare let GLFW_KEY_P: number;
export declare let GLFW_KEY_Q: number;
export declare let GLFW_KEY_R: number;
export declare let GLFW_KEY_S: number;
export declare let GLFW_KEY_T: number;
export declare let GLFW_KEY_U: number;
export declare let GLFW_KEY_V: number;
export declare let GLFW_KEY_W: number;
export declare let GLFW_KEY_X: number;
export declare let GLFW_KEY_Y: number;
export declare let GLFW_KEY_Z: number;
export declare let GLFW_KEY_LEFT_BRACKET: number;
export declare let GLFW_KEY_BACKSLASH: number;
export declare let GLFW_KEY_RIGHT_BRACKET: number;
export declare let GLFW_KEY_GRAVE_ACCENT: number;
export declare let GLFW_KEY_WORLD_1: number;
export declare let GLFW_KEY_WORLD_2: number;
export declare let GLFW_KEY_ESCAPE: number;
export declare let GLFW_KEY_ENTER: number;
export declare let GLFW_KEY_TAB: number;
export declare let GLFW_KEY_BACKSPACE: number;
export declare let GLFW_KEY_INSERT: number;
export declare let GLFW_KEY_DELETE: number;
export declare let GLFW_KEY_RIGHT: number;
export declare let GLFW_KEY_LEFT: number;
export declare let GLFW_KEY_DOWN: number;
export declare let GLFW_KEY_UP: number;
export declare let GLFW_KEY_PAGE_UP: number;
export declare let GLFW_KEY_PAGE_DOWN: number;
export declare let GLFW_KEY_HOME: number;
export declare let GLFW_KEY_END: number;
export declare let GLFW_KEY_CAPS_LOCK: number;
export declare let GLFW_KEY_SCROLL_LOCK: number;
export declare let GLFW_KEY_NUM_LOCK: number;
export declare let GLFW_KEY_PRINT_SCREEN: number;
export declare let GLFW_KEY_PAUSE: number;
export declare let GLFW_KEY_F1: number;
export declare let GLFW_KEY_F2: number;
export declare let GLFW_KEY_F3: number;
export declare let GLFW_KEY_F4: number;
export declare let GLFW_KEY_F5: number;
export declare let GLFW_KEY_F6: number;
export declare let GLFW_KEY_F7: number;
export declare let GLFW_KEY_F8: number;
export declare let GLFW_KEY_F9: number;
export declare let GLFW_KEY_F10: number;
export declare let GLFW_KEY_F11: number;
export declare let GLFW_KEY_F12: number;
export declare let GLFW_KEY_F13: number;
export declare let GLFW_KEY_F14: number;
export declare let GLFW_KEY_F15: number;
export declare let GLFW_KEY_F16: number;
export declare let GLFW_KEY_F17: number;
export declare let GLFW_KEY_F18: number;
export declare let GLFW_KEY_F19: number;
export declare let GLFW_KEY_F20: number;
export declare let GLFW_KEY_F21: number;
export declare let GLFW_KEY_F22: number;
export declare let GLFW_KEY_F23: number;
export declare let GLFW_KEY_F24: number;
export declare let GLFW_KEY_F25: number;
export declare let GLFW_KEY_KP_0: number;
export declare let GLFW_KEY_KP_1: number;
export declare let GLFW_KEY_KP_2: number;
export declare let GLFW_KEY_KP_3: number;
export declare let GLFW_KEY_KP_4: number;
export declare let GLFW_KEY_KP_5: number;
export declare let GLFW_KEY_KP_6: number;
export declare let GLFW_KEY_KP_7: number;
export declare let GLFW_KEY_KP_8: number;
export declare let GLFW_KEY_KP_9: number;
export declare let GLFW_KEY_KP_DECIMAL: number;
export declare let GLFW_KEY_KP_DIVIDE: number;
export declare let GLFW_KEY_KP_MULTIPLY: number;
export declare let GLFW_KEY_KP_SUBTRACT: number;
export declare let GLFW_KEY_KP_ADD: number;
export declare let GLFW_KEY_KP_ENTER: number;
export declare let GLFW_KEY_KP_EQUAL: number;
export declare let GLFW_KEY_LEFT_SHIFT: number;
export declare let GLFW_KEY_LEFT_CONTROL: number;
export declare let GLFW_KEY_LEFT_ALT: number;
export declare let GLFW_KEY_LEFT_SUPER: number;
export declare let GLFW_KEY_RIGHT_SHIFT: number;
export declare let GLFW_KEY_RIGHT_CONTROL: number;
export declare let GLFW_KEY_RIGHT_ALT: number;
export declare let GLFW_KEY_RIGHT_SUPER: number;
export declare let GLFW_KEY_MENU: number;
export declare let GLFW_KEY_LAST: number;
export declare let GLFW_MOD_SHIFT: number;
export declare let GLFW_MOD_CONTROL: number;
export declare let GLFW_MOD_ALT: number;
export declare let GLFW_MOD_SUPER: number;
export declare let GLFW_MOD_CAPS_LOCK: number;
export declare let GLFW_MOD_NUM_LOCK: number;
export declare let GLFW_MOUSE_BUTTON_1: number;
export declare let GLFW_MOUSE_BUTTON_2: number;
export declare let GLFW_MOUSE_BUTTON_3: number;
export declare let GLFW_MOUSE_BUTTON_4: number;
export declare let GLFW_MOUSE_BUTTON_5: number;
export declare let GLFW_MOUSE_BUTTON_6: number;
export declare let GLFW_MOUSE_BUTTON_7: number;
export declare let GLFW_MOUSE_BUTTON_8: number;
export declare let GLFW_MOUSE_BUTTON_LAST: number;
export declare let GLFW_MOUSE_BUTTON_LEFT: number;
export declare let GLFW_MOUSE_BUTTON_RIGHT: number;
export declare let GLFW_MOUSE_BUTTON_MIDDLE: number;
export declare let GLFW_JOYSTICK_1: number;
export declare let GLFW_JOYSTICK_2: number;
export declare let GLFW_JOYSTICK_3: number;
export declare let GLFW_JOYSTICK_4: number;
export declare let GLFW_JOYSTICK_5: number;
export declare let GLFW_JOYSTICK_6: number;
export declare let GLFW_JOYSTICK_7: number;
export declare let GLFW_JOYSTICK_8: number;
export declare let GLFW_JOYSTICK_9: number;
export declare let GLFW_JOYSTICK_10: number;
export declare let GLFW_JOYSTICK_11: number;
export declare let GLFW_JOYSTICK_12: number;
export declare let GLFW_JOYSTICK_13: number;
export declare let GLFW_JOYSTICK_14: number;
export declare let GLFW_JOYSTICK_15: number;
export declare let GLFW_JOYSTICK_16: number;
export declare let GLFW_JOYSTICK_LAST: number;
export declare let GLFW_GAMEPAD_BUTTON_A: number;
export declare let GLFW_GAMEPAD_BUTTON_B: number;
export declare let GLFW_GAMEPAD_BUTTON_X: number;
export declare let GLFW_GAMEPAD_BUTTON_Y: number;
export declare let GLFW_GAMEPAD_BUTTON_LEFT_BUMPER: number;
export declare let GLFW_GAMEPAD_BUTTON_RIGHT_BUMPER: number;
export declare let GLFW_GAMEPAD_BUTTON_BACK: number;
export declare let GLFW_GAMEPAD_BUTTON_START: number;
export declare let GLFW_GAMEPAD_BUTTON_GUIDE: number;
export declare let GLFW_GAMEPAD_BUTTON_LEFT_THUMB: number;
export declare let GLFW_GAMEPAD_BUTTON_RIGHT_THUMB: number;
export declare let GLFW_GAMEPAD_BUTTON_DPAD_UP: number;
export declare let GLFW_GAMEPAD_BUTTON_DPAD_RIGHT: number;
export declare let GLFW_GAMEPAD_BUTTON_DPAD_DOWN: number;
export declare let GLFW_GAMEPAD_BUTTON_DPAD_LEFT: number;
export declare let GLFW_GAMEPAD_BUTTON_LAST: number;
export declare let GLFW_GAMEPAD_BUTTON_CROSS: number;
export declare let GLFW_GAMEPAD_BUTTON_CIRCLE: number;
export declare let GLFW_GAMEPAD_BUTTON_SQUARE: number;
export declare let GLFW_GAMEPAD_BUTTON_TRIANGLE: number;
export declare let GLFW_GAMEPAD_AXIS_LEFT_X: number;
export declare let GLFW_GAMEPAD_AXIS_LEFT_Y: number;
export declare let GLFW_GAMEPAD_AXIS_RIGHT_X: number;
export declare let GLFW_GAMEPAD_AXIS_RIGHT_Y: number;
export declare let GLFW_GAMEPAD_AXIS_LEFT_TRIGGER: number;
export declare let GLFW_GAMEPAD_AXIS_RIGHT_TRIGGER: number;
export declare let GLFW_GAMEPAD_AXIS_LAST: number;
export declare let GLFW_NO_ERROR: number;
export declare let GLFW_NOT_INITIALIZED: number;
export declare let GLFW_NO_CURRENT_CONTEXT: number;
export declare let GLFW_INVALID_ENUM: number;
export declare let GLFW_INVALID_VALUE: number;
export declare let GLFW_OUT_OF_MEMORY: number;
export declare let GLFW_API_UNAVAILABLE: number;
export declare let GLFW_VERSION_UNAVAILABLE: number;
export declare let GLFW_PLATFORM_ERROR: number;
export declare let GLFW_FORMAT_UNAVAILABLE: number;
export declare let GLFW_NO_WINDOW_CONTEXT: number;
export declare let GLFW_FOCUSED: number;
export declare let GLFW_ICONIFIED: number;
export declare let GLFW_RESIZABLE: number;
export declare let GLFW_VISIBLE: number;
export declare let GLFW_DECORATED: number;
export declare let GLFW_AUTO_ICONIFY: number;
export declare let GLFW_FLOATING: number;
export declare let GLFW_MAXIMIZED: number;
export declare let GLFW_CENTER_CURSOR: number;
export declare let GLFW_TRANSPARENT_FRAMEBUFFER: number;
export declare let GLFW_HOVERED: number;
export declare let GLFW_FOCUS_ON_SHOW: number;
export declare let GLFW_RED_BITS: number;
export declare let GLFW_GREEN_BITS: number;
export declare let GLFW_BLUE_BITS: number;
export declare let GLFW_ALPHA_BITS: number;
export declare let GLFW_DEPTH_BITS: number;
export declare let GLFW_STENCIL_BITS: number;
export declare let GLFW_ACCUM_RED_BITS: number;
export declare let GLFW_ACCUM_GREEN_BITS: number;
export declare let GLFW_ACCUM_BLUE_BITS: number;
export declare let GLFW_ACCUM_ALPHA_BITS: number;
export declare let GLFW_AUX_BUFFERS: number;
export declare let GLFW_STEREO: number;
export declare let GLFW_SAMPLES: number;
export declare let GLFW_SRGB_CAPABLE: number;
export declare let GLFW_REFRESH_RATE: number;
export declare let GLFW_DOUBLEBUFFER: number;
export declare let GLFW_CLIENT_API: number;
export declare let GLFW_CONTEXT_VERSION_MAJOR: number;
export declare let GLFW_CONTEXT_VERSION_MINOR: number;
export declare let GLFW_CONTEXT_REVISION: number;
export declare let GLFW_CONTEXT_ROBUSTNESS: number;
export declare let GLFW_OPENGL_FORWARD_COMPAT: number;
export declare let GLFW_OPENGL_DEBUG_CONTEXT: number;
export declare let GLFW_OPENGL_PROFILE: number;
export declare let GLFW_CONTEXT_RELEASE_BEHAVIOR: number;
export declare let GLFW_CONTEXT_NO_ERROR: number;
export declare let GLFW_CONTEXT_CREATION_API: number;
export declare let GLFW_SCALE_TO_MONITOR: number;
export declare let GLFW_COCOA_RETINA_FRAMEBUFFER: number;
export declare let GLFW_COCOA_FRAME_NAME: number;
export declare let GLFW_COCOA_GRAPHICS_SWITCHING: number;
export declare let GLFW_X11_CLASS_NAME: number;
export declare let GLFW_X11_INSTANCE_NAME: number;
export declare let GLFW_NO_API: number;
export declare let GLFW_OPENGL_API: number;
export declare let GLFW_OPENGL_ES_API: number;
export declare let GLFW_NO_ROBUSTNESS: number;
export declare let GLFW_NO_RESET_NOTIFICATION: number;
export declare let GLFW_LOSE_CONTEXT_ON_RESET: number;
export declare let GLFW_OPENGL_ANY_PROFILE: number;
export declare let GLFW_OPENGL_CORE_PROFILE: number;
export declare let GLFW_OPENGL_COMPAT_PROFILE: number;
export declare let GLFW_CURSOR: number;
export declare let GLFW_STICKY_KEYS: number;
export declare let GLFW_STICKY_MOUSE_BUTTONS: number;
export declare let GLFW_LOCK_KEY_MODS: number;
export declare let GLFW_RAW_MOUSE_MOTION: number;
export declare let GLFW_CURSOR_NORMAL: number;
export declare let GLFW_CURSOR_HIDDEN: number;
export declare let GLFW_CURSOR_DISABLED: number;
export declare let GLFW_ANY_RELEASE_BEHAVIOR: number;
export declare let GLFW_RELEASE_BEHAVIOR_FLUSH: number;
export declare let GLFW_RELEASE_BEHAVIOR_NONE: number;
export declare let GLFW_NATIVE_CONTEXT_API: number;
export declare let GLFW_EGL_CONTEXT_API: number;
export declare let GLFW_OSMESA_CONTEXT_API: number;
export declare let GLFW_ARROW_CURSOR: number;
export declare let GLFW_IBEAM_CURSOR: number;
export declare let GLFW_CROSSHAIR_CURSOR: number;
export declare let GLFW_HAND_CURSOR: number;
export declare let GLFW_HRESIZE_CURSOR: number;
export declare let GLFW_VRESIZE_CURSOR: number;
export declare let GLFW_CONNECTED: number;
export declare let GLFW_DISCONNECTED: number;
export declare let GLFW_JOYSTICK_HAT_BUTTONS: number;
export declare let GLFW_COCOA_CHDIR_RESOURCES: number;
export declare let GLFW_COCOA_MENUBAR: number;
export declare let GLFW_DONT_CARE: number;
