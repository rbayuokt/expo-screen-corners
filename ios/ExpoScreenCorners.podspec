require 'json'

package = JSON.parse(File.read(File.join(__dir__, '..', 'package.json')))

Pod::Spec.new do |s|
  s.name           = 'ExpoScreenCorners'
  s.version        = package['version']
  s.summary        = 'Get the physical screen corner radius of a device'
  s.description    = 'Exposes the physical display corner radius natively so UIs can match the actual screen corners.'
  s.author         = 'rbayuokt'
  s.homepage       = 'https://github.com/rbayuokt/expo-screen-corners'
  s.platform       = :ios, '15.1'
  s.source         = { git: 'https://github.com/rbayuokt/expo-screen-corners' }
  s.static_framework = true

  s.dependency 'ExpoModulesCore'

  # Swift/Objective-C compatibility
  s.pod_target_xcconfig = {
    'DEFINES_MODULE' => 'YES',
  }

  s.source_files = "**/*.{h,m,mm,swift,hpp,cpp}"
end
