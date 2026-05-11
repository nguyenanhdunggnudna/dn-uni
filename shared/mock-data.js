/**
 * Mock Data for .NET Razor Template Simulation
 * This file defines the @Model data for different user roles.
 */
window.MOCK_DATA = {
    roles: {
        "Director": {
            UserName: "Ngọc Vũ",
            UserRole: "Giám đốc",
            UserAvatar: "../assets/images/avatar.svg",
            DashboardTitle: "Hệ thống Quản lý Giám đốc",
            Permissions: ["INTERNAL_NEWS", "INCOMING_DOCS", "OUTGOING_DOCS", "REPORTS"]
        },
        "Principal": {
            UserName: "Lê Minh",
            UserRole: "Hiệu trưởng",
            UserAvatar: "../assets/images/avatar.svg",
            DashboardTitle: "Hệ thống Quản lý Hiệu trưởng",
            Permissions: ["INTERNAL_NEWS", "INCOMING_DOCS", "OUTGOING_DOCS", "REPORTS"]
        },
        "Clerk": {
            UserName: "Trần Hoa",
            UserRole: "Văn thư",
            UserAvatar: "../assets/images/avatar.svg",
            DashboardTitle: "Hệ thống Văn thư",
            Permissions: ["INCOMING_DOCS", "OUTGOING_DOCS"]
        },
        "AdministrativeHead": {
            UserName: "Nguyễn Văn A",
            UserRole: "Trưởng phòng hành chính",
            UserAvatar: "../assets/images/avatar.svg",
            DashboardTitle: "Hệ thống Quản lý Hành chính",
            Permissions: ["INTERNAL_NEWS", "INCOMING_DOCS", "OUTGOING_DOCS"]
        },
        "DeputyHead": {
            UserName: "Phạm Văn B",
            UserRole: "Phó phòng",
            UserAvatar: "../assets/images/avatar.svg",
            DashboardTitle: "Hệ thống Quản lý Phó phòng",
            Permissions: ["INTERNAL_NEWS", "INCOMING_DOCS", "OUTGOING_DOCS", "TASKS", "CALENDAR", "UTILITIES"]
        }
    },
    currentRole: localStorage.getItem('userRole') || 'Director'
};
