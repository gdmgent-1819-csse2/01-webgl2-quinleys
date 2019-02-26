import Tests from './Tests/Tests.js'
import Vector2 from './Library/Math/Vector2.js'
import Vector3 from './Library/Math/Vector3.js'
import Vector4 from './Library/Math/Vector4.js'
import Matrix2 from './Library/Math/Vector2.js'
import Matrix3 from './Library/Math/Matrix3.js'
import Matrix4 from './Library/Math/Matrix4.js'

/** Class for the application. */
export default class Application {
    /**
     * Create a new application.
     */
    constructor() {
        const tests = true
        if (tests) {
            new Tests()
        }
        console.info('WebGL2 Demo')
         /*
        Code Les

        const v1 = new Vector2
        const v2 = new Vector2(1.5, 2.5)
        console.log('start:', v1, v2)
        v1.sub(v2)
        console.log('v1 - v2:', v1, v2)
        const a = 10
        v1.scalar(a)
        console.log('a * v1:', a, v1)
        console.log('norm of v1:', v1.norm())
        const v3 = new Vector2(3, 5)
        const v4 = new Vector2(5, 3)
        const v5 = new Vector2(-3, -5)
        console.log('v3 . v4:', v3.dot(v4))
        console.log('v4 . v5:', v4.dot(v5))
        const v6 = new Vector2(3, 1)
        console.log('v6', v6)
        v6.rot(90)
        console.log('v6.rot(90)', v6)

        */

       //Vectors
       const v3 = new Vector3(1,1,2)
       const v4 = new Vector3(2,3,1)
       const v5 = new Vector4(1,1,2,3)
       const v6 = new Vector4(2,3,1,2)

       const x = 5
       v4.scaler(x)
       console.log('x * v4', a,v4)

       v5.add(v6)
       console.log('v5 + v6', v5)

       v4.sub(v3)
       console.log('v4 - v4' , v4)

       v6.sub(v5)
       console.log('v6 - v5', v6)

       //Matrix

       const m1 = new Matrix3(
            1,4,3,
            4,1,2,
            4,2,3
        )

        const m2 = new Matrix3(
            2,5,1,
            5,3,4,
            1,2,3
        )

        const m3 = new Matrix4(
            1,2,3,4,
            4,3,2,1,
            3,4,2,1,
            2,1,4,3
        )

        m1.sub(m2)
        console.log('m1 - m2' , m1)

        m2.add(m1)
        console.log('m2 + m1', m2)
        
        
    }
}