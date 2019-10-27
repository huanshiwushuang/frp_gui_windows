'
' @Description: HTA启动文件
' @Author: your name
' @Date: 2019-10-25 21:19:24
' @LastEditTime: 2019-10-26 16:33:17
' @LastEditors: Please set LastEditors
'
Set ws = CreateObject("Wscript.Shell")
Set fs = CreateObject("Scripting.FileSystemObject")
' 获取当前脚本路径
currentPath = fs.GetFile(Wscript.ScriptFullName).ParentFolder.Path
' 运行
ws.Run("%windir%\System32\mshta.exe " & currentPath & "\main.hta")
