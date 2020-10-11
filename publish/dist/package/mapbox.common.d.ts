import { Color } from "@nativescript/core";
import { ContentView } from "@nativescript/core";
import { Property } from "@nativescript/core";
export declare enum MapStyle {
    DARK,
    OUTDOORS,
    LIGHT,
    SATELLITE,
    SATELLITE_STREETS,
    STREETS,
    TRAFFIC_DAY,
    TRAFFIC_NIGHT
}
export interface LatLng {
    lat: number;
    lng: number;
}
export interface QueryRenderedFeaturesOptions {
    point: LatLng;
    layerIds?: string[];
}
export interface Feature {
    id: any;
    type?: string;
    properties: Object;
}
export interface AddPolygonOptions {
    id?: any;
    points: LatLng[];
    fillColor?: string | Color;
    fillOpacity?: number;
    strokeColor?: string | Color;
    strokeWidth?: number;
    strokeOpacity?: number;
}
export interface UserLocation {
    location: LatLng;
    speed: number;
}
export interface SetCenterOptions extends LatLng {
    animated?: boolean;
    duration?: number;
    bearing?: number;
    tilt?: number;
    zoom?: number;
}
export interface AddPolylineOptions {
    id?: any;
    width?: number;
    color?: string | Color;
    opacity?: number;
    points: LatLng[];
}
export interface MapboxMarker extends LatLng {
    id?: any;
    title?: string;
    subtitle?: string;
    icon?: string;
    iconPath?: string;
    onTap?: Function;
    onCalloutTap?: Function;
    selected?: boolean;
    update?: (newSettings: MapboxMarker) => void;
    ios?: any;
    android?: any;
}
export interface SetZoomLevelOptions {
    level: number;
    animated: boolean;
    duration: number;
}
export interface SetTiltOptions {
    tilt: number;
    duration: number;
}
export interface ShowOptionsMargins {
    left?: number;
    right?: number;
    top?: number;
    bottom?: number;
}
export interface Bounds {
    north: number;
    east: number;
    south: number;
    west: number;
}
export interface Viewport {
    bounds: Bounds;
    zoomLevel: number;
}
export interface SetViewportOptions {
    bounds: Bounds;
    animated?: boolean;
    padding?: number;
}
export interface DeleteOfflineRegionOptions {
    name: string;
}
export interface MapboxCluster {
    points: number;
    color: string;
}
export interface AddGeoJsonClusteredOptions {
    name: string;
    data: string;
    clusterMaxZoom?: number;
    clusterRadius?: number;
    clusters?: Array<MapboxCluster>;
}
export interface AddLayerOptions {
    id: string;
    source: string;
    sourceLayer: string;
    type: string;
    circleColor?: string | Color;
    circleOpacity?: number;
    circleRadius?: number;
    circleStrokeColor?: string | Color;
    circleStrokeWidth?: number;
    fillColor?: string | Color;
    fillOpacity?: number;
    lineCap?: string;
    lineJoin?: string;
    lineColor?: string | Color;
    lineOpacity?: number;
    lineWidth?: number;
}
export declare type UserTrackingMode = "NONE" | "FOLLOW" | "FOLLOW_WITH_HEADING" | "FOLLOW_WITH_COURSE";
export interface AddSourceOptions {
    url: string;
    type: string;
    data?: any;
}
export declare type UserLocationCameraMode = "NONE" | "NONE_COMPASS" | "NONE_GPS" | "TRACKING" | "TRACKING_COMPASS" | "TRACKING_GPS" | "TRACKING_GPS_NORTH";
export interface TrackUserOptions {
    cameraMode: UserLocationCameraMode;
    renderMode: string;
    animated?: boolean;
}
export interface AddExtrusionOptions {
}
export interface OfflineRegion {
    name: string;
    bounds: Bounds;
    minZoom: number;
    maxZoom: number;
    style: MapStyle;
}
export interface DownloadProgress {
    name: string;
    completed: number;
    expected: number;
    percentage: number;
    complete: boolean;
    completedSize?: number;
}
export interface DownloadOfflineRegionOptions extends OfflineRegion {
    onProgress?: (data: DownloadProgress) => void;
    accessToken?: string;
}
export interface ListOfflineRegionsOptions {
    accessToken?: string;
}
export interface ShowOptions {
    accessToken: string;
    style?: MapStyle;
    margins?: ShowOptionsMargins;
    center?: LatLng;
    zoomLevel?: number;
    showUserLocation?: boolean;
    hideLogo?: boolean;
    hideAttribution?: boolean;
    hideCompass?: boolean;
    disableRotation?: boolean;
    disableScroll?: boolean;
    disableZoom?: boolean;
    disableTilt?: boolean;
    markers?: MapboxMarker[];
    onLocationPermissionGranted?: any;
    onLocationPermissionDenied?: any;
    onMapReady?: any;
    onScrollEvent?: any;
    onMoveBeginEvent?: any;
    context?: any;
    parentView?: any;
}
export interface ShowResult {
    ios: any;
    android: any;
}
export interface AnimateCameraOptions {
    target: LatLng;
    zoomLevel?: number;
    altitude?: number;
    bearing?: number;
    tilt?: number;
    duration?: number;
}
export interface MapboxCommonApi {
    requestFineLocationPermission(): Promise<any>;
    hasFineLocationPermission(): Promise<boolean>;
}
export interface MapboxApi {
    setMapboxViewInstance(mapboxNativeViewInstance: any): void;
    setMapboxMapInstance(mapboxNativeMapInstance: any): void;
    initEventHandlerShim(settings: any, mapboxNativeViewInstance: any): void;
    onMapEvent(eventName: any, id: any, callback: any, nativeMapView?: any): void;
    offMapEvent(eventName: any, id: any, nativeMapView?: any): void;
    show(options: ShowOptions): Promise<ShowResult>;
    hide(): Promise<any>;
    unhide(): Promise<any>;
    destroy(nativeMap?: any): Promise<any>;
    onStart(nativeMap?: any): Promise<any>;
    onResume(nativeMap?: any): Promise<any>;
    onPause(nativeMap?: any): Promise<any>;
    onStop(nativeMap?: any): Promise<any>;
    onLowMemory(nativeMap?: any): Promise<any>;
    onDestroy(nativeMap?: any): Promise<any>;
    setMapStyle(style: string | MapStyle, nativeMap?: any): Promise<any>;
    addMarkers(markers: MapboxMarker[], nativeMap?: any): Promise<any>;
    removeMarkers(options?: any, nativeMap?: any): Promise<any>;
    setCenter(options: SetCenterOptions, nativeMap?: any): Promise<any>;
    getCenter(nativeMap?: any): Promise<LatLng>;
    setZoomLevel(options: SetZoomLevelOptions, nativeMap?: any): Promise<any>;
    getZoomLevel(nativeMap?: any): Promise<number>;
    setTilt(options: SetTiltOptions, nativeMap?: any): Promise<any>;
    getTilt(nativeMap?: any): Promise<number>;
    getUserLocation(nativeMap?: any): Promise<UserLocation>;
    showUserLocationMarker(options: any, nativeMap?: any): void;
    hideUserLocationMarker(nativeMap?: any): void;
    changeUserLocationMarkerMode(renderModeString: any, cameraModeString: UserLocationCameraMode, nativeMap?: any): void;
    forceUserLocationUpdate(location: any, nativeMap?: any): void;
    trackUser(options: TrackUserOptions, nativeMap?: any): Promise<void>;
    addSource(id: string, options: AddSourceOptions, nativeMapView?: any): Promise<any>;
    removeSource(id: string, nativeMap?: any): Promise<any>;
    addLayer(style: any, nativeMapView?: any): Promise<any>;
    removeLayer(id: string, nativeMapView?: any): Promise<any>;
    getLayer(id: string, nativeMapView?: any): Promise<any>;
    addLinePoint(id: string, point: any, nativeMapView?: any): Promise<any>;
    queryRenderedFeatures(options: QueryRenderedFeaturesOptions, nativeMap?: any): Promise<Array<Feature>>;
    addPolygon(options: AddPolygonOptions, nativeMap?: any): Promise<any>;
    removePolygons(ids?: Array<any>, nativeMap?: any): Promise<any>;
    addPolyline(options: AddPolylineOptions, nativeMap?: any): Promise<any>;
    removePolylines(ids?: Array<any>, nativeMap?: any): Promise<any>;
    animateCamera(options: AnimateCameraOptions, nativeMap?: any): Promise<any>;
    setOnMapClickListener(listener: (data: LatLng) => void, nativeMap?: any): Promise<any>;
    setOnMapLongClickListener(listener: (data: LatLng) => void, nativeMap?: any): Promise<any>;
    setOnScrollListener(listener: (data?: LatLng) => void, nativeMap?: any): Promise<void>;
    setOnMoveBeginListener(listener: (data?: LatLng) => void, nativeMap?: any): Promise<void>;
    setOnFlingListener(listener: () => void, nativeMap?: any): Promise<any>;
    setOnCameraMoveListener(listener: () => void, nativeMap?: any): Promise<any>;
    setOnCameraMoveCancelListener(listener: () => void, nativeMap?: any): Promise<any>;
    setOnCameraIdleListener(listener: () => void, nativeMap?: any): Promise<any>;
    requestFineLocationPermission(): Promise<any>;
    hasFineLocationPermission(): Promise<boolean>;
    getViewport(nativeMap?: any): Promise<Viewport>;
    setViewport(options: SetViewportOptions, nativeMap?: any): Promise<any>;
    downloadOfflineRegion(options: DownloadOfflineRegionOptions): Promise<any>;
    listOfflineRegions(options?: ListOfflineRegionsOptions): Promise<Array<OfflineRegion>>;
    deleteOfflineRegion(options: DeleteOfflineRegionOptions): Promise<any>;
    addGeoJsonClustered(options: AddGeoJsonClusteredOptions): Promise<any>;
    removeSource(id: string, nativeMap?: any): Promise<any>;
    addLayer(options: AddLayerOptions): Promise<any>;
    removeLayer(id: string, nativeMap?: any): Promise<any>;
    getLayer(id: string, nativeMap?: any): Promise<any>;
}
export declare abstract class MapboxCommon implements MapboxCommonApi {
    static defaults: {
        style: string;
        mapStyle: string;
        margins: {
            left: number;
            right: number;
            top: number;
            bottom: number;
        };
        zoomLevel: number;
        showUserLocation: boolean;
        locationComponentOptions: {};
        hideLogo: boolean;
        hideAttribution: boolean;
        hideCompass: boolean;
        disableRotation: boolean;
        disableScroll: boolean;
        disableZoom: boolean;
        disableTilt: boolean;
        delay: number;
    };
    static merge(obj1: {}, obj2: {}): any;
    requestFineLocationPermission(): Promise<any>;
    hasFineLocationPermission(): Promise<boolean>;
}
export interface MapboxViewApi {
    addMarkers(markers: MapboxMarker[]): Promise<any>;
    onMapEvent(eventName: any, id: any, callback: any): void;
    offMapEvent(eventName: any, id: any): void;
    removeMarkers(options?: any): Promise<any>;
    queryRenderedFeatures(options: QueryRenderedFeaturesOptions): Promise<Array<Feature>>;
    setOnMapClickListener(listener: (data: LatLng) => void): Promise<any>;
    setOnMapLongClickListener(listener: (data: LatLng) => void): Promise<any>;
    setOnScrollListener(listener: (data?: LatLng) => void): Promise<void>;
    setOnMoveBeginListener(listener: (data?: LatLng) => void): Promise<void>;
    setOnFlingListener(listener: () => void): Promise<any>;
    setOnCameraMoveListener(listener: () => void): Promise<any>;
    setOnCameraMoveCancelListener(listener: () => void): Promise<any>;
    setOnCameraIdleListener(listener: () => void): Promise<any>;
    getViewport(): Promise<Viewport>;
    setViewport(options: SetViewportOptions): Promise<any>;
    setMapStyle(style: string | MapStyle): Promise<any>;
    getCenter(): Promise<LatLng>;
    setCenter(options: SetCenterOptions): Promise<any>;
    getZoomLevel(): Promise<number>;
    setZoomLevel(options: SetZoomLevelOptions): Promise<any>;
    getTilt(): Promise<number>;
    setTilt(options: SetTiltOptions): Promise<any>;
    getUserLocation(): Promise<UserLocation>;
    trackUser(options: TrackUserOptions): Promise<any>;
    showUserLocationMarker(options: any): void;
    hideUserLocationMarker(options: any): void;
    changeUserLocationMarkerMode(renderModeString: any, cameraModeString: UserLocationCameraMode): void;
    forceUserLocationUpdate(location: any): void;
    addSource(id: string, options: AddSourceOptions): Promise<any>;
    removeSource(id: string, nativeMap?: any): Promise<any>;
    addLayer(style: any): Promise<any>;
    removeLayer(id: string): Promise<any>;
    getLayer(id: string): Promise<any>;
    addLinePoint(id: string, point: any): Promise<any>;
    queryRenderedFeatures(options: QueryRenderedFeaturesOptions): Promise<Array<Feature>>;
    addPolygon(options: AddPolygonOptions): Promise<any>;
    removePolygons(ids?: Array<any>): Promise<any>;
    addPolyline(options: AddPolylineOptions): Promise<any>;
    removePolylines(ids?: Array<any>): Promise<any>;
    animateCamera(options: AnimateCameraOptions): Promise<any>;
    destroy(): Promise<any>;
    onStart(): Promise<any>;
    onResume(): Promise<any>;
    onPause(): Promise<any>;
    onStop(): Promise<any>;
    onLowMemory(): Promise<any>;
    onDestroy(): Promise<any>;
}
export declare abstract class MapboxViewCommonBase extends ContentView implements MapboxViewApi {
    protected mapbox: MapboxApi;
    abstract getNativeMapView(): any;
    onMapEvent(eventName: any, id: any, callback: any): void;
    offMapEvent(eventName: any, id: any): void;
    addMarkers(markers: MapboxMarker[]): Promise<any>;
    removeMarkers(options?: any): Promise<any>;
    setOnMapClickListener(listener: (data: LatLng) => void): Promise<any>;
    setOnMapLongClickListener(listener: (data: LatLng) => void): Promise<any>;
    setOnScrollListener(listener: (data?: LatLng) => void, nativeMap?: any): Promise<void>;
    setOnMoveBeginListener(listener: (data?: LatLng) => void, nativeMap?: any): Promise<void>;
    setOnFlingListener(listener: () => void, nativeMap?: any): Promise<any>;
    setOnCameraMoveListener(listener: () => void, nativeMap?: any): Promise<any>;
    setOnCameraMoveCancelListener(listener: () => void, nativeMap?: any): Promise<any>;
    setOnCameraIdleListener(listener: () => void, nativeMap?: any): Promise<any>;
    getViewport(): Promise<Viewport>;
    setViewport(options: SetViewportOptions): Promise<any>;
    setMapStyle(style: string | MapStyle): Promise<any>;
    getCenter(): Promise<LatLng>;
    setCenter(options: SetCenterOptions): Promise<any>;
    getZoomLevel(): Promise<number>;
    setZoomLevel(options: SetZoomLevelOptions): Promise<any>;
    getTilt(): Promise<number>;
    setTilt(options: SetTiltOptions): Promise<any>;
    getUserLocation(): Promise<UserLocation>;
    showUserLocationMarker(options: any): void;
    hideUserLocationMarker(): void;
    changeUserLocationMarkerMode(renderModeString: any, cameraModeString: UserLocationCameraMode): void;
    forceUserLocationUpdate(location: any): void;
    trackUser(options: TrackUserOptions): Promise<any>;
    addSource(id: string, options: AddSourceOptions): Promise<any>;
    removeSource(id: string): Promise<any>;
    addLayer(style: any): Promise<any>;
    removeLayer(id: string): Promise<any>;
    getLayer(id: string): Promise<any>;
    addLinePoint(id: string, point: any): Promise<any>;
    queryRenderedFeatures(options: QueryRenderedFeaturesOptions): Promise<Array<Feature>>;
    addPolygon(options: AddPolygonOptions): Promise<any>;
    removePolygons(ids?: Array<any>): Promise<any>;
    addPolyline(options: AddPolylineOptions): Promise<any>;
    removePolylines(ids?: Array<any>): Promise<any>;
    animateCamera(options: AnimateCameraOptions): Promise<any>;
    destroy(): Promise<any>;
    onStart(): Promise<any>;
    onResume(nativeMap?: any): Promise<any>;
    onPause(nativeMap?: any): Promise<any>;
    onStop(nativeMap?: any): Promise<any>;
    onLowMemory(nativeMap?: any): Promise<any>;
    onDestroy(nativeMap?: any): Promise<any>;
}
export declare const mapReadyProperty: Property<MapboxViewCommonBase, string>;
export declare const zoomLevelProperty: Property<MapboxViewCommonBase, number>;
export declare const accessTokenProperty: Property<MapboxViewCommonBase, string>;
export declare const mapStyleProperty: Property<MapboxViewCommonBase, string>;
export declare const latitudeProperty: Property<MapboxViewCommonBase, number>;
export declare const longitudeProperty: Property<MapboxViewCommonBase, number>;
export declare const showUserLocationProperty: Property<MapboxViewCommonBase, boolean>;
export declare const locationComponentOptionsProperty: Property<MapboxViewCommonBase, object>;
export declare const hideLogoProperty: Property<MapboxViewCommonBase, boolean>;
export declare const hideAttributionProperty: Property<MapboxViewCommonBase, boolean>;
export declare const hideCompassProperty: Property<MapboxViewCommonBase, boolean>;
export declare const disableZoomProperty: Property<MapboxViewCommonBase, boolean>;
export declare const disableRotationProperty: Property<MapboxViewCommonBase, boolean>;
export declare const disableScrollProperty: Property<MapboxViewCommonBase, boolean>;
export declare const disableTiltProperty: Property<MapboxViewCommonBase, boolean>;
export declare const delayProperty: Property<MapboxViewCommonBase, number>;
export declare abstract class MapboxViewBase extends MapboxViewCommonBase {
    static mapReadyEvent: string;
    static scrollEvent: string;
    static moveBeginEvent: string;
    static locationPermissionGrantedEvent: string;
    static locationPermissionDeniedEvent: string;
    protected config: any;
}
