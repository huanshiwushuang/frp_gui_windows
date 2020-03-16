DWX = new ActiveXObject("DynamicWrapperX");
        DWX.Register("user32.dll", "MessageBoxW", "i=hwwu", "r=l");
        res = DWX.MessageBoxW(0, "Hello, world!", "Test", 4); // Call.