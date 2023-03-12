Description:
GravityZone is a Unity asset that allows you to create areas in your game that affect gravity on objects inside them. You can use this to create areas of zero gravity, low gravity, high gravity, or even invert gravity in certain areas.

Features:
- Sphere or box-shaped zones
- Local gravity can be set to be independent from global gravity
- Customizable gravity force
- Zero gravity - set gravity force to '0'
- Add to or override global gravity
- Orbit mode for simulating gravitational pull
- Easy-to-use editor script for creating new Gravity Zones
- Gravity Zones may be moved around
- Changing the rotation of a zone changes it's flow of gravity

Usage:
1. Add a Gravity Zone to your scene (GameObject > 3D > Gravity Zone)
2. Customize the Gravity Zone settings to your liking
3. Add a rigidbody to any object you want to be effected by the Gravity Zone

Optional:
- Add a GravityZoneAgent component to any object that you want to be able to do extra logic on when inside a Gravity Zone 
    - Use the GravityZoneAgent.IsInGravityZone property in your scripts to check if an object is inside a GravityZone

- You can create a GravityProfile asset to store default gravity settings and apply them to multiple GravityZone objects (Create > GravityZone > Gravity Profile)
    -There are 4 settings bundled with the package in (GravityZone/Settings)

Gravity Zone Agent Example:

Here's an example script that uses GravityZoneAgent to check if an object is inside a GravityZone and adjust its behavior accordingly:

using UnityEngine;

[RequireComponent(typeof(GravityZoneAgent))]
public class MyScript : MonoBehaviour
{

    public float jumpForce = 10f;
    private Rigidbody rb;
    private GravityZoneAgent gravityZoneAgent;

    private void Start()
    {
        rb = GetComponent<Rigidbody>();
        gravityZoneAgent = GetComponent<GravityZoneAgent>();
    }

    private void Update()
    {
        if (gravityZoneAgent.IsInGravityZone)
        {
            // Jump with less force in gravity zone
            if (Input.GetKeyDown(KeyCode.Space))
            {
                rb.AddForce(Vector3.up * (jumpForce / 2f), ForceMode.Impulse);
            }
        }
        else
        {
            // Jump with normal force outside gravity zone
            if (Input.GetKeyDown(KeyCode.Space))
            {
                rb.AddForce(Vector3.up * jumpForce, ForceMode.Impulse);
            }
        }
    }
    
}